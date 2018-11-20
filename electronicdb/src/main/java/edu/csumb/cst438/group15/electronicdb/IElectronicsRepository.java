package edu.csumb.cst438.group15.electronicdb;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import edu.csumb.cst438.group15.electronicdb.entities.Electronics;

@Repository
public interface IElectronicsRepository extends MongoRepository<Electronics, String>{

}