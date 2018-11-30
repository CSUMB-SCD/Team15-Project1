package edu.csumb.cst438.group15.electronicdb;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import edu.csumb.cst438.group15.electronicdb.entities.ProductInfo;

@Component
public class ElectronicsDbSender implements CommandLineRunner{

    @Autowired
    IProductInfoRepository productInfoRepo;

    @Override
    public void run(String... args) throws Exception {
        ProductInfo pi1 = new ProductInfo(1,10,"MacBook Pro","The newest fastest MacBook out now.", 2500);
        ProductInfo pi2 = new ProductInfo(2,10,"Ear Pods","Reliable blah blah", 180);
       
        
        //delete db data
        productInfoRepo.deleteAll();

        //add db seeds
        List<ProductInfo> productInfo = Arrays.asList(pi1,pi2);

        productInfoRepo.saveAll(productInfo);
    }

}