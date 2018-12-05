import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  private loginStatus = new BehaviorSubject('no');
  currentStatus = this.loginStatus.asObservable();

  changeMessage(status: string) {
    this.loginStatus.next(status);
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
