package edu.csumb.cst438.team15.usersdb.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {
    @Id
    private String username;
    private String password;
    private int credit;


    public User (String name,String password, int credit) {
        this.username = name;
        this.password = password;
        this.credit = credit;
    }

    public String getUser(){
        return this.username;
    }
    public String getPassWord(){
        return this.password;
    }
    public int getCredit(){
        return this.credit;
    }
    public void setName(String userName){
        this.username = userName;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setCredit(int credit){
        this.credit = credit;
    }

}