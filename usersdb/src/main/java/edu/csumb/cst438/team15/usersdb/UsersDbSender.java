package edu.csumb.cst438.team15.usersdb;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import edu.csumb.cst438.team15.usersdb.entities.User;
import java.util.List;
import java.util.Arrays;

@Component
public class UsersDbSender implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        User rayleen = new User("rayleen","testing",1500);
        User manjit = new User("Manjit","testing2",10000);
        User irais = new User("Irais","testing3",1243500);

        List<User> users = Arrays.asList(rayleen,manjit,irais);
        //UsersRepo.saveAll(users);
    }

}