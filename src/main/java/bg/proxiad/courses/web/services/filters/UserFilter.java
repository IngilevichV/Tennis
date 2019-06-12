package bg.proxiad.courses.web.services.filters;

import bg.proxiad.courses.web.entities.UserRole;
import lombok.Data;

@Data
public class UserFilter {
    private UserRole.Role role;
}
