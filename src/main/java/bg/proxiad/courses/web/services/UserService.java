package bg.proxiad.courses.web.services;

import bg.proxiad.courses.web.dto.UserByListDto;
import bg.proxiad.courses.web.entities.UserRole;
import bg.proxiad.courses.web.repositories.UserRepository;
import bg.proxiad.courses.web.repositories.UserRoleRepository;
import bg.proxiad.courses.web.services.filters.UserFilter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;

    public Page<UserByListDto> findAll(UserFilter filter, Pageable pageable) {
        UserRole.Role role = Optional.ofNullable(filter)
                .map(UserFilter::getRole)
                .orElse(null);

        if (role == null) {
            return userRepository.findAll(pageable).map(UserByListDto::new);
        } else {
            UserRole userRole = userRoleRepository.findByRole(role);
            return userRepository.findAllByRolesContains(userRole, pageable).map(UserByListDto::new);
        }
    }
}
