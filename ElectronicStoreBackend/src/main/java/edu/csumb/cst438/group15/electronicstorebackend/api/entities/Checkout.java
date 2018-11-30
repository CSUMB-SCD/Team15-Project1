package edu.csumb.cst438.group15.electronicstorebackend.api.entities;

public class Checkout {
    //DO WE WANT CHECKOUT AS A LIST OF ITEMS???
    private Integer userID;
    //TODO: ADD OTHER PARAMS (itemNumber)

    public Checkout (Integer userID){
        this.userID = userID;
    }

    public void setUserID (Integer userID) {
        this.userID = userID;
    }

    public Integer getUserID() {
        return this.userID;
    }
}