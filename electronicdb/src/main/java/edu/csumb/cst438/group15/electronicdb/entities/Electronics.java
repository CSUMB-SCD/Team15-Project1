package edu.csumb.cst438.group15.electronicdb.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Electronics")
public class Electronics {
    @Id
    private String id;
    private ProductInfo productInfo;
    // private Users users;
    // private Checkout checkout;

    public Electronics(ProductInfo productInfo) {
        this.productInfo = productInfo;
        // this.users = users;
        // this.checkout = checkout;
    }

    public void setProductInfo(ProductInfo productInfo){
        this.productInfo = productInfo;
    }

    public ProductInfo getProductInfo() {
        return this.productInfo;
    }

    // public void setUsers(Users users){
    //     this.users = users;
    // }

    // public Users getUsers(){
    //     return this.users;
    // }

    // public void setCheckout(Checkout checkout){
    //     this.checkout = checkout;
    // }

    // public Checkout getCheckout(){
    //     return this.checkout;
    // }

    

}
