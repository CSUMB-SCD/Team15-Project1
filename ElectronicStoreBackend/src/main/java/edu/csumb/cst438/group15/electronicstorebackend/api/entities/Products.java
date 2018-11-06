package edu.csumb.cst438.group15.electronicstorebackend.api.entities;

public class Products {
    private Integer userID;

    //TODO: ADD OTHER PARAMS (itemNumber, itemName)

    public Products (Integer userID){
        this.userID = userID;
    }

    public void setUserID (Integer userID) {
        this.userID = userID;
    }

    public Integer getUserID() {
        return this.userID;
    }
}