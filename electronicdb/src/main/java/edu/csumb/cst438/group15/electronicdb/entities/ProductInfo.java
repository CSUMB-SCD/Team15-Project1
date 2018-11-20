package edu.csumb.cst438.group15.electronicdb.entities;

public class ProductInfo {
    private String description;

    public ProductInfo (String description) {
        this.description = description;
    }

    public String getProductname() {
        return this.description;
    }
}