import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  
  private products = [];
  private infoForProducts = [];
  
  quantity:number;
  productName:string = '';
  price:number;
  productDesc:string = ''; 
  found:boolean;
  productInfoUrl:string = 'http://localhost:8081/allProductInfo';
  productUrl:string = 'http://localhost:8081/allProducts';

  constructor(private httpClient:HttpClient) { }

  getProductURL(name: string) : string {
    return this.productUrl + '/?productName=' + name;
  }


  postProductInfo() {
    this.httpClient.get(this.productInfoUrl)
    .subscribe(
      (data: any[]) => {

        if(data.length){
          console.log(data)
          this.products = data;
        }
      }
    )
  } 

  // postProductQuantity(){
  //   this.httpClient.get(this.productUrl)
  //   .subscribe(
  //     (data: any[]) => {

  //       if(data.length){
  //         console.log(data)
  //         //this.infoForProducts = data;
  //         this.test();
  //       }
  //     }
  //   )
  // }

  ngOnInit() {
    this.postProductInfo();
    //this.postProductQuantity();
  }

}
