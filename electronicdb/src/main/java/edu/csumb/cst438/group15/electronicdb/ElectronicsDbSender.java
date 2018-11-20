package edu.csumb.cst438.group15.electronicdb;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//import edu.csumb.cst438.group15.electronicdb.entities.Checkout;
import edu.csumb.cst438.group15.electronicdb.entities.Electronics;
import edu.csumb.cst438.group15.electronicdb.entities.ProductInfo;
import edu.csumb.cst438.group15.electronicdb.entities.Products;
//import edu.csumb.cst438.group15.electronicdb.entities.Users;

@Component
public class ElectronicsDbSender implements CommandLineRunner{

    @Autowired
    IElectronicsRepository electroncisRepo;


    @Override
    public void run(String... args) throws Exception {
        Electronics macBookPro = new Electronics(new Products("Mac Book Pro"), new ProductInfo("User friendly mac book."));
        Electronics earPods = new Electronics(new Products("Ear Pods"), new ProductInfo("Portable on the go ear pods."));

        Products test = new Products("MacBook");

        
        
        //delete db data
        electroncisRepo.deleteAll();
        //add db seeds
        List<Electronics> electronics = Arrays.asList(macBookPro, earPods);
        electroncisRepo.saveAll(electronics);
    }

}