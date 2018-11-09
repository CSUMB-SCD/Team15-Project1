package edu.csumb.cst438.group15.electronicstorebackend.api.entities;

public class Products {
    private Integer userID;
    private String productName;

    //TODO: ADD OTHER PARAMS (itemNumber, itemName)

    public Products (Integer userID, String productName){
        this.userID = userID;
        this.productName = productName;
    }

    public void setUserID (Integer userID) {
        this.userID = userID;
    }

    public Integer getUserID() {
        return this.userID;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductName() {
        return this.productName;
    }
}