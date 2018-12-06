import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public checkoutCart = {};
  total:number = 0;
  public quantity:number;

  private loginStatus = new BehaviorSubject('no');
  currentStatus = this.loginStatus.asObservable();

  changeMessage(status: string) {
    this.loginStatus.next(status);
  }

  addToCart(productId, price, singleQuantity, dbQuantity, productName){
    this.quantity = dbQuantity;
    console.log(productId);
    if (productId in this.checkoutCart) {
      this.checkoutCart[productId][1] += singleQuantity;
      this.checkoutCart[productId][0] += (price * singleQuantity);
    } else {
      this.checkoutCart[productId] = [price * singleQuantity, singleQuantity, productName, dbQuantity];
      console.log(this.checkoutCart[productId]);
    }

  }

  getTotalPrice():number{
    this.total=0;
    for(let key in this.checkoutCart) {
      let pair = this.checkoutCart[key];
      this.total += pair[0];
    }
    return this.total;
  }



  // functions to return JSON
  getUsers() { return this.httpClient.get('https://team15spring-users.herokuapp.com/allUsers')}

  onNameKeyUp(event: any) {
    console.log(event.target.value);
  }

  getProductInfoByName(productName) { return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/search?product-name='+ encodeURI(productName) )}

  getAllProductInfo() {return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/allProductInfo') }

  //Trying to push to github
}
