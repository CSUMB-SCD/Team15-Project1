import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    
  constructor(private httpClient:HttpClient) { }
  onNameKeyUp(event:any){
    console.log(event.target.value);
  }

  // getProductInfo(){
  //   return this.httpClient.get('http://localhost:8081/allProductInfo')
  // }

}