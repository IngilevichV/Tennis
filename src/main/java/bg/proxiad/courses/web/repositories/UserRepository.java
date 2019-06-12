package bg.proxiad.courses.web.repositories;

import bg.proxiad.courses.web.entities.User;
import bg.proxiad.courses.web.entities.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface UserRepository extends JpaRepository<User, String> {
    User findUserByLogin(String login);
    Collection<User> findAllByRolesContains(UserRole role);
    Page<User> findAllByRolesContains(UserRole role, Pageable pageable);
    Page<User> findAll(Pageable pageable);
}
