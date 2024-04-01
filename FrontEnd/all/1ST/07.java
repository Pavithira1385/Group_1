// WorkshopController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/workshops")
public class WorkshopController {

    @Autowired
    private WorkshopService workshopService;

    @PostMapping("")
    public ResponseEntity<Workshop> addWorkshop(@RequestBody Workshop workshop) {
        try {
            Workshop createdWorkshop = workshopService.addWorkshop(workshop);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdWorkshop);
        } catch (DuplicateKeyException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping("/{workshopId}")
    public ResponseEntity<Workshop> getWorkshop(@PathVariable Long workshopId) {
        Workshop workshop = workshopService.getWorkshop(workshopId);
        if (workshop != null) {
            return ResponseEntity.ok(workshop);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{workshopId}")
    public ResponseEntity<Workshop> updateWorkshop(@PathVariable Long workshopId, @RequestBody Workshop workshop) {
        Workshop updatedWorkshop = workshopService.updateWorkshop(workshopId, workshop);
        if (updatedWorkshop != null) {
            return ResponseEntity.ok(updatedWorkshop);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{workshopId}")
    public ResponseEntity<Void> deleteWorkshop(@PathVariable Long workshopId) {
        workshopService.deleteWorkshop(workshopId);
        return ResponseEntity.noContent().build();
    }
}
java
Copy code
// SessionController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @GetMapping("/{sessionId}/participants/count")
    public ResponseEntity<Integer> countParticipants(@PathVariable Long sessionId) {
        int participantCount = sessionService.countParticipants(sessionId);
        return ResponseEntity.ok(participantCount);
    }

    @GetMapping("/{sessionId}/presenters")
    public ResponseEntity<List<String>> getPresenters(@PathVariable Long sessionId) {
        List<String> presenters = sessionService.getPresenters(sessionId);
        return ResponseEntity.ok(presenters);
    }
}
java
Copy code
// ExpertController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experts")
public class ExpertController {

    @Autowired
    private ExpertService expertService;

    @GetMapping("/undergraduates/female")
    public ResponseEntity<List<Expert>> getFemaleUndergraduates() {
        List<Expert> femaleUndergraduates = expertService.getFemaleUndergraduates();
        return ResponseEntity.ok(femaleUndergraduates);
    }

    @GetMapping("/postgraduates")
    public ResponseEntity<List<Expert>> filterPostgraduates(@RequestParam(required = false) String gender,
                                                            @RequestParam(required = false) String researchInterest) {
        List<Expert> filteredPostgraduates = expertService.filterPostgraduates(gender, researchInterest);
        return ResponseEntity.ok(filteredPostgraduates);
    }
}
Now, let's implement the service classes:

java
Copy code
// WorkshopService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class WorkshopService {

    @Autowired
    private WorkshopRepository workshopRepository;

    public Workshop addWorkshop(Workshop workshop) {
        // Validate if workshop with same ID already exists
        if (workshopRepository.existsById(workshop.getId())) {
            throw new DuplicateKeyException("Workshop with ID " + workshop.getId() + " already exists.");
        }
        return workshopRepository.save(workshop);
    }

    public Workshop getWorkshop(Long workshopId) {
        return workshopRepository.findById(workshopId).orElse(null);
    }

    public Workshop updateWorkshop(Long workshopId, Workshop workshop) {
        if (workshopRepository.existsById(workshopId)) {
            workshop.setId(workshopId);
            return workshopRepository.save(workshop);
        } else {
            return null;
        }
    }

    public void deleteWorkshop(Long workshopId) {
        workshopRepository.deleteById(workshopId);
    }
}
java
Copy code
// SessionService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    public int countParticipants(Long sessionId) {
        Session session = sessionRepository.findById(sessionId).orElse(null);
        if (session != null) {
            return session.getParticipants().size();
        } else {
            return 0;
        }
    }

    public List<String> getPresenters(Long sessionId) {
        Session session = sessionRepository.findById(sessionId).orElse(null);
        if (session != null) {
            return session.getPresenters();
        } else {
            return null;
        }
    }
}
java
Copy code
// ExpertService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpertService {

    @Autowired
    private ExpertRepository expertRepository;

    public List<Expert> getFemaleUndergraduates() {
        return expertRepository.findByGenderAndDegree("female", "undergraduate");
    }

    public List<Expert> filterPostgraduates(String gender, String researchInterest) {
        if (gender != null && researchInterest != null) {
            return expertRepository.findByGenderAndDegreeAndResearchInterest(gender, "postgraduate", researchInterest);
        } else if (gender != null) {
            return expertRepository.findByGenderAndDegree(gender, "postgraduate");
        } else if (researchInterest != null) {
            return expertRepository.findByDegreeAndResearchInterest("postgraduate", researchInterest);
        } else {
            return expertRepository.findByDegree("postgraduate");
        }
    }
}