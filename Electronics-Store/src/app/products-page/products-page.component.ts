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
  productInfoUrl:string = 'https://spring-boot-testing-438.herokuapp.com/allProductInfo';

  constructor(private httpClient:HttpClient) { }

  
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

  ngOnInit() {
    this.postProductInfo();
  }

}
