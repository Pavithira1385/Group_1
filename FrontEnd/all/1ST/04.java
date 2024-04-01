import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    public List<String> getSessionTitlesByPresenter(Long presenterId) {
        List<Session> sessions = sessionRepository.findByPresenterId(presenterId);
        return sessions.stream().map(Session::getTitle).collect(Collectors.toList());
    }
    
    // Other service methods for CRUD operations and business logic
}









import javax.persistence.*;

@Entity
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String title;
    
    @ManyToOne
    @JoinColumn(name = "presenter_id")
    private Presenter presenter;

    // Other properties, constructors, getters, and setters
}
