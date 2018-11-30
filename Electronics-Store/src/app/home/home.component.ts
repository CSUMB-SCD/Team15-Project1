import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private infos = [];

  name:string = '';
  productInfoUrl:string = 'http://localhost:8081/allProductInfo';
  price: number;
  productDesc:string = '';
  found:boolean;
  
  constructor(private httpClient:HttpClient) { }
  onNameKeyUp(event:any) {
     this.name = event.target.value;
     this.found = false;
  }

   getProductInfoURL(name: string) : string {
    return this.productInfoUrl + '?productName=' + name;
  }

  getProductDescription(){
   
    this.httpClient.get(this.getProductInfoURL(this.name))
    .subscribe(
      (data:any[]) => {
        
         if(data.length){
           //console.log(data)
           this.infos = data;
           let a =0;
           for(a;a<this.infos.length;a++){
             if(this.infos[a].productName==this.name)
             {
              this.price = this.infos[a].price;

             }
           }
           console.log(this.infos); 
            this.found = true;
         }
      }
    )
  }

  ngOnInit() {
  }

}
