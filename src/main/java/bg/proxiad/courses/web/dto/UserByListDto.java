package bg.proxiad.courses.web.dto;

import bg.proxiad.courses.web.entities.City;
import bg.proxiad.courses.web.entities.User;
import lombok.Data;

import java.util.Optional;
import java.util.UUID;

@Data
public class UserByListDto {
    private String login;
    private String city;

    public UserByListDto(User user) {
        login = user.getLogin();
        city = Optional.ofNullable(user.getCurrentCity())
                .map(City::getName)
                .orElse(null);
    }

}
