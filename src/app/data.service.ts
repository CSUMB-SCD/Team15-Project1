import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  users$;

  public checkoutCart = {};
  public temp = {};
  total:number = 0;
  public quantity:number;

  public new_credit:number;

  private loginStatus = new BehaviorSubject('no');
  currentStatus = this.loginStatus.asObservable();

  private userCreditStatus = new BehaviorSubject('enough');
  currentUserCreditStatus = this.userCreditStatus.asObservable();

  changeCurrentCreditStatus(credit_status: string) {
    this.userCreditStatus.next(credit_status);
  }

  changeMessage(status: string) {
    this.loginStatus.next(status);
  }

 currCredit(userName){
  this.getUsers().subscribe(data => {
    this.users$ = data;
    for(let i=0; i<this.users$.length;i++ ){
      if (this.users$[i].username === userName){
          this.new_credit = this.users$[i].credit;
      }
    }
    console.log(this.new_credit);
    } );
 }

  addToCart(productId, price, singleQuantity, dbQuantity, productName){
    this.quantity = dbQuantity;
    console.log(price);
    console.log(singleQuantity);
    if (productId in this.checkoutCart) {
      this.temp[productId][1] += singleQuantity;
      this.temp[productId][0] = (price);

      this.checkoutCart[productId][1] += singleQuantity;
      this.checkoutCart[productId][0] += (price * singleQuantity);
    } else {
      this.temp[productId] = [price, singleQuantity, productName, productName, dbQuantity];
      this.checkoutCart[productId] = [this.temp[productId][0] * singleQuantity, singleQuantity, productName, dbQuantity];
    }

  }

  getTotalPrice():number{
    this.total=0;
    for(let key in this.temp) {
      let pair = this.temp[key];
      console.log(pair);
      this.total += pair[0] * pair[1];
      console.log(this.total);
      console.log('checkout cart', this.temp[key][0]);
    }
    return this.total;
  }


  // functions to return JSON
  getUsers() { return this.httpClient.get('https://team15spring-users.herokuapp.com/allUsers')}

  getUsersByName(username) { return this.httpClient.get('https://team15spring-users.herokuapp.com/allUsers' + encodeURI(username))}

  onNameKeyUp(event: any) {
    console.log(event.target.value);
  }

  getProductInfoByName(productName) { return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/search?product-name='+ encodeURI(productName) )}

  getAllProductInfo() {return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/allProductInfo') }

}
