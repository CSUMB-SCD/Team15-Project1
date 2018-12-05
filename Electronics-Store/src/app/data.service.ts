import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient:HttpClient) { }

  public checkoutCart = [];
  total:number = 0;

  private loginStatus = new BehaviorSubject('no');
  currentStatus = this.loginStatus.asObservable();

  changeMessage(status: string) {
    this.loginStatus.next(status)
  }

  getTotalPrice():number{
    this.total=0;
    for(let i of this.checkoutCart){
      this.total += Number(i.price);
    }
    console.log(this.total);
    return this.total;
  }

  // functions to return JSON
  getUsers() { return this.httpClient.get('../assets/users.json') }

  onNameKeyUp(event:any){
    console.log(event.target.value);
  }

  getProductInfoByName(productName) { return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/search?product-name='+ encodeURI(productName) )}
  
  getAllProductInfo() {return this.httpClient.get('https://spring-boot-testing-438.herokuapp.com/allProductInfo') }
 
}
