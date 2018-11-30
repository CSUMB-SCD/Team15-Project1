package edu.csumb.cst438.team15.usersdb;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import edu.csumb.cst438.team15.usersdb.entities.User;

@Repository
public interface IUsersRepository extends MongoRepository<User,String>{
    
}