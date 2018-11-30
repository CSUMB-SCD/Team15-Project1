import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private httpClient:HttpClient) { }
  // getProductInfo(){
  //   return this.httpClient.get('http://localhost:8081/allProductInfo')
  // }
  private loginStatus = new BehaviorSubject('No');
  currentStatus = this.loginStatus.asObservable();
  changeMessage(status: string) {
    this.loginStatus.next(status)
  }

  // functions to return JSON
  getUsers() { return this.httpClient.get('../assets/users.json') }

  onNameKeyUp(event:any){
    console.log(event.target.value);
  }
}
