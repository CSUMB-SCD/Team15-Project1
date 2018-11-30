package edu.csumb.cst438.group15.electronicstorebackend.api.entities;

public class Users {
    private Integer userID;
    //TODO: ADD OTHER PARAMS (username, password)

    public Users (Integer userID){
        this.userID = userID;
    }

    public void setUserID (Integer userID) {
        this.userID = userID;
    }

    public Integer getUserID() {
        return this.userID;
    }
    
}