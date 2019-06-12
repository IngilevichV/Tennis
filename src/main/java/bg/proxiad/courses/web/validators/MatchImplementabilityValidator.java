package bg.proxiad.courses.web.validators;

import bg.proxiad.courses.web.entities.Match;
import bg.proxiad.courses.web.entities.Platform;
import bg.proxiad.courses.web.validators.interfaces.ValidMatch;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDateTime;

public class MatchImplementabilityValidator implements ConstraintValidator<ValidMatch, Match> {
    public void initialize(ValidMatch constraintAnnotation) {
    }

    @Override
    public boolean isValid(Match match, ConstraintValidatorContext constraintValidatorContext) {
        Platform platform = match.getPlatform();
        LocalDateTime dateTime = match.getDateTime();
        if (!platform.isOpenOn(dateTime)) {
            constraintValidatorContext.buildConstraintViolationWithTemplate(
                    "в указанный момент площадка закрыта")
                    .addPropertyNode("dateTime").addConstraintViolation();
            return false;
        }
        return true;
    }
}