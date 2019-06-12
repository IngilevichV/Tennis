package bg.proxiad.courses.web.repositories;

import bg.proxiad.courses.web.entities.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long> {
}
