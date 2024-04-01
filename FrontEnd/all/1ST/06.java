import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipantService {

    @Autowired
    private ParticipantRepository participantRepository;

    public List<Participant> filterPostgraduatesByGenderAndResearchInterest(String gender, String researchInterest) {
        return participantRepository.findByGenderAndIsUndergraduateFalseAndResearchInterest(gender, researchInterest);
    }
    
    // Other service methods for CRUD operations and business logic
}



import javax.persistence.*;

@Entity
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private String gender;
    
    private boolean isUndergraduate;
    
    private String researchInterest;

    // Other properties, constructors, getters, and setters
}
