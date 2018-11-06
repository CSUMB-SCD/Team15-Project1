package edu.csumb.cst438.group15.electronicstorebackend.api.entities;


public class Electronics {

    private Products products;
    private ProductInfo productInfo;
    private Users users;
    private Checkout checkout;

    public Electronics(Products products, ProductInfo productInfo, Users users, Checkout checkout) {
        this.products = products;
        this.productInfo = productInfo;
        this.users = users;
        this.checkout = checkout;
    }

    public void setProducts(Products products){
        this.products = products;
    }

    public Products getProducts(){
        return this.products;
    }

    public void setProductInfo(ProductInfo productInfo){
        this.productInfo = productInfo;
    }

    public ProductInfo getProductInfo() {
        return this.productInfo;
    }

    public void setUsers(Users users){
        this.users = users;
    }

    public Users getUsers(){
        return this.users;
    }

    public void setCheckout(Checkout checkout){
        this.checkout = checkout;
    }

    public Checkout getCheckout(){
        return this.checkout;
    }

    

}