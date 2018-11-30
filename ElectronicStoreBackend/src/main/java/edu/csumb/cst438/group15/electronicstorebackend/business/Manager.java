package edu.csumb.cst438.group15.electronicstorebackend.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.csumb.cst438.group15.electronicstorebackend.api.entities.Electronics;
import edu.csumb.cst438.group15.electronicstorebackend.data.ElectronicsDbClient;

@Service
public class Manager {

    @Autowired
    ElectronicsDbClient electronicsDbClient;
    //TODO: use Business entities rather than api/presentation layer entities
    
    public List<Electronics> getElectronicsList() {
        return null;
    }
}