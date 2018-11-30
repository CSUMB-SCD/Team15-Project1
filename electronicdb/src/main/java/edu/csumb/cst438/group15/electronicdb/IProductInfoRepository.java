package edu.csumb.cst438.group15.electronicdb;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import edu.csumb.cst438.group15.electronicdb.entities.ProductInfo;

@Repository
public interface IProductInfoRepository extends MongoRepository<ProductInfo, String>{

}