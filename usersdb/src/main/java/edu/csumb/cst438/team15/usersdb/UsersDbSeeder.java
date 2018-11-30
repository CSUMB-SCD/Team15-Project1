package edu.csumb.cst438.team15.usersdb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import edu.csumb.cst438.team15.usersdb.entities.User;
import java.util.List;
import java.util.Arrays;

@Component
public class UsersDbSeeder implements CommandLineRunner {
    @Autowired
    IUsersRepository usersRepo;
    @Override
    public void run(String... args) throws Exception {
        User rayleen = new User("rayleen","testing",1500);
        User manjit = new User("Manjit","testing2",10000);
        User irais = new User("Irais","testing3",1243500);

        //delete db data
        usersRepo.deleteAll();
        
        //add db seeds
        List<User> users = Arrays.asList(rayleen,manjit,irais);
        
        usersRepo.saveAll(users);
    }

}