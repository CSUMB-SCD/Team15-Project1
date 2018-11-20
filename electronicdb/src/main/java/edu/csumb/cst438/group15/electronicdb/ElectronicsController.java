package edu.csumb.cst438.group15.electronicdb;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import edu.csumb.cst438.group15.electronicdb.entities.Electronics;
import edu.csumb.cst438.group15.electronicdb.entities.Products;


@RestContoller
public class ElectronicsController {
    @Autowired
    IElectronicsRepository electronicsRepository;
    IElectronicsRepository productsRepository;

    @GetMapping("/allElectronics")
    public List<Electronics> getAll () {
        List<Electronics> result = electronicsRepository.findAll();
        return result;
    }

    @GetMapping("/allProducts")
    public List<Products> getAll () {
        List<Products> result = productsRepository.findAll();
        return result;
    }
    
}