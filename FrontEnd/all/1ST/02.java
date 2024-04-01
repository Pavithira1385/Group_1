import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class WorkshopService {

    @Autowired
    private WorkshopRepository workshopRepository;

    public Workshop addWorkshop(Workshop workshop) {
        // Check if the workshop ID already exists
        if (workshopRepository.existsById(workshop.getId())) {
            throw new DuplicateKeyException("Workshop ID already exists");
        }
        return workshopRepository.save(workshop);
    }
    
    // Other service methods for CRUD operations and business logic
}
