package edu.csumb.cst438.group15.electronicdb.entities;

public class Checkout {
    private Integer userID;

    public Checkout (Integer userID) {
        this.userID = userID;
    }

    public Integer getUserID() {
        return this.userID;
    }
}