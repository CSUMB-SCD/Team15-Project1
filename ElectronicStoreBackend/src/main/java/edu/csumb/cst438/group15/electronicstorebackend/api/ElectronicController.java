package edu.csumb.cst438.group15.electronicstorebackend.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Electronics;
import edu.csumb.cst438.group15.electronicstorebackend.business.Manager;

@RestController
public class ElectronicController {

    @Autowired
    Manager manager;

    @GetMapping("/Electronics")
    @ResponseBody
    List<Electronics> getElectronics () {
        return null;
    }

}