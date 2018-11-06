package edu.csumb.cst438.group15.electronicstorebackend.api.entities;

public class ProductInfo {
    private Integer itemNumber;

    //TODO: ADD OTHER PARAMS (itemNumber, itemName, quantity, description, price)

    public ProductInfo (Integer itemNumber){
        this.itemNumber = itemNumber;
    }

    public void setItemNumber (Integer itemNumber) {
        this.itemNumber = itemNumber;
    }

    public Integer getUserID() {
        return this.itemNumber;
    }

}