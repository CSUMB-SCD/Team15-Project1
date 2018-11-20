package edu.csumb.cst438.group15.electronicdb.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Products")
public class Products {
    @Id
    private String id;
    private String productName;

    public Products (String productName) {
        this.productName = productName;
    }

    public String getProductName() {
        return this.productName;
    }
}