package edu.csumb.cst438.group15.electronicdb.entities;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ProductInfo")
public class ProductInfo {
    
    private Number id;
    private Integer quantity;
    private String description;
    private Integer price;
    private String productName;

    public ProductInfo (Number id, Integer quantity, String productName, String description, Integer price) {
        this.id = id;
        this.quantity = quantity;
        this.productName = productName;
        this.description = description;
        this.price = price;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public Number getID(){
        return this.id;
    }

    public String getProductName() {
        return this.productName;
    }

    public String getProductDesc() {
        return this.description;
    }

    public Integer getPrice(){
        return this.price;
    }
}