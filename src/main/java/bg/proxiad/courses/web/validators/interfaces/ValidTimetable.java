package bg.proxiad.courses.web.validators.interfaces;

import bg.proxiad.courses.web.validators.TimetableValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Constraint(validatedBy = TimetableValidator.class)
public @interface ValidTimetable {
    String message() default "timetable can not be created";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
