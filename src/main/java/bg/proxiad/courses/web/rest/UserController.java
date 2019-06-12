package bg.proxiad.courses.web.rest;

import bg.proxiad.courses.web.dto.UserByListDto;
import bg.proxiad.courses.web.services.UserService;
import bg.proxiad.courses.web.services.filters.UserFilter;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api/users")
@AllArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;

    @GetMapping
    public @ResponseBody Page<UserByListDto> findAll(UserFilter filter, Pageable pageable) {
        return userService.findAll(filter, pageable);
    }
}
