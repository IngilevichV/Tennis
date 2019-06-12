package bg.proxiad.courses.web.repositories;

import bg.proxiad.courses.web.entities.Dialog;
import bg.proxiad.courses.web.entities.Match;
import bg.proxiad.courses.web.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface DialogRepository extends CrudRepository<Dialog, Long> {
    Collection<Dialog> findByInviter(User user);
    Collection<Dialog> findByInvited(User user);
    Dialog findByInviterAndInvited(User user1, User user2);
    Collection<Dialog> findByMatch(Match match);
    Collection<Dialog> findByMatchIn(Collection<Match> matches);

    default Dialog findByUsers(User user1, User user2) {
        Dialog d1 = findByInviterAndInvited(user1, user2);

        if (d1 != null) return d1;
        else return findByInviterAndInvited(user2, user1);
    }
    default Collection<Dialog> findByUser(User user) {
        Collection<Dialog> result = findByInviter(user);
        result.addAll(findByInvited(user));
        return result;
    }
}
