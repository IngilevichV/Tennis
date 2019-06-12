package bg.proxiad.courses.web.validators.interfaces;

import bg.proxiad.courses.web.validators.MatchImplementabilityValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Constraint(validatedBy = MatchImplementabilityValidator.class)
public @interface ValidMatch {
    String message() default "match can not be created";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
