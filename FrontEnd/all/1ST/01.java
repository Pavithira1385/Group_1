import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class WorkshopController {

    @Autowired
    private WorkshopService workshopService;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private ExpertService expertService;

    @Autowired
    private ParticipantService participantService;

    // CRUD operations for Workshop

    @PostMapping("/workshops")
    public ResponseEntity<Workshop> createWorkshop(@RequestBody Workshop workshop) {
        Workshop createdWorkshop = workshopService.createWorkshop(workshop);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWorkshop);
    }

    @GetMapping("/workshops/{id}")
    public ResponseEntity<Workshop> getWorkshopById(@PathVariable("id") Long id) {
        Workshop workshop = workshopService.getWorkshopById(id);
        return workshop != null ? ResponseEntity.ok().body(workshop) : ResponseEntity.notFound().build();
    }

    @PutMapping("/workshops/{id}")
    public ResponseEntity<Workshop> updateWorkshop(@PathVariable("id") Long id, @RequestBody Workshop workshop) {
        Workshop updatedWorkshop = workshopService.updateWorkshop(id, workshop);
        return updatedWorkshop != null ? ResponseEntity.ok().body(updatedWorkshop) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/workshops/{id}")
    public ResponseEntity<Void> deleteWorkshop(@PathVariable("id") Long id) {
        workshopService.deleteWorkshop(id);
        return ResponseEntity.noContent().build();
    }

    // CRUD operations for Session

    @PostMapping("/sessions")
    public ResponseEntity<Session> createSession(@RequestBody Session session) {
        Session createdSession = sessionService.createSession(session);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSession);
    }

    @GetMapping("/sessions/{id}")
    public ResponseEntity<Session> getSessionById(@PathVariable("id") Long id) {
        Session session = sessionService.getSessionById(id);
        return session != null ? ResponseEntity.ok().body(session) : ResponseEntity.notFound().build();
    }

    @PutMapping("/sessions/{id}")
    public ResponseEntity<Session> updateSession(@PathVariable("id") Long id, @RequestBody Session session) {
        Session updatedSession = sessionService.updateSession(id, session);
        return updatedSession != null ? ResponseEntity.ok().body(updatedSession) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/sessions/{id}")
    public ResponseEntity<Void> deleteSession(@PathVariable("id") Long id) {
        sessionService.deleteSession(id);
        return ResponseEntity.noContent().build();
    }

    // CRUD operations for Expert

    @PostMapping("/experts")
    public ResponseEntity<Expert> createExpert(@RequestBody Expert expert) {
        Expert createdExpert = expertService.createExpert(expert);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdExpert);
    }

    @GetMapping("/experts/{id}")
    public ResponseEntity<Expert> getExpertById(@PathVariable("id") Long id) {
        Expert expert = expertService.getExpertById(id);
        return expert != null ? ResponseEntity.ok().body(expert) : ResponseEntity.notFound().build();
    }

    @PutMapping("/experts/{id}")
    public ResponseEntity<Expert> updateExpert(@PathVariable("id") Long id, @RequestBody Expert expert) {
        Expert updatedExpert = expertService.updateExpert(id, expert);
        return updatedExpert != null ? ResponseEntity.ok().body(updatedExpert) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/experts/{id}")
    public ResponseEntity<Void> deleteExpert(@PathVariable("id") Long id) {
        expertService.deleteExpert(id);
        return ResponseEntity.noContent().build();
    }

    // CRUD operations for Participant

    @PostMapping("/participants")
    public ResponseEntity<Participant> createParticipant(@RequestBody Participant participant) {
        Participant createdParticipant = participantService.createParticipant(participant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdParticipant);
    }

    @GetMapping("/participants/{id}")
    public ResponseEntity<Participant> getParticipantById(@PathVariable("id") Long id) {
        Participant participant = participantService.getParticipantById(id);
        return participant != null ? ResponseEntity.ok().body(participant) : ResponseEntity.notFound().build();
    }

    @PutMapping("/participants/{id}")
    public ResponseEntity<Participant> updateParticipant(@PathVariable("id") Long id, @RequestBody Participant participant) {
        Participant updatedParticipant = participantService.updateParticipant(id, participant);
        return updatedParticipant != null ? ResponseEntity.ok().body(updatedParticipant) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/participants/{id}")
    public ResponseEntity<Void> deleteParticipant(@PathVariable("id") Long id) {
        participantService.deleteParticipant(id);
        return ResponseEntity.noContent().build();
    }
}
