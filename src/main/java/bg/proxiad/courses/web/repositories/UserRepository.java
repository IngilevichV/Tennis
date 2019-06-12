package bg.proxiad.courses.web.repositories;

import bg.proxiad.courses.web.entities.User;
import bg.proxiad.courses.web.entities.UserRole;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;

public interface UserRepository extends CrudRepository<User, String> {
    User findUserByLogin(String login) throws UsernameNotFoundException;
    Collection<User> findAllByRolesContains(UserRole role);
}
