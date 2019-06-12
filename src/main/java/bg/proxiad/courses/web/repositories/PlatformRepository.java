package bg.proxiad.courses.web.repositories;

import bg.proxiad.courses.web.entities.City;
import bg.proxiad.courses.web.entities.Platform;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface PlatformRepository extends CrudRepository<Platform, Long> {
    Collection<Platform> findByCity(City city);
}
