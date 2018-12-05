import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  items$: Object;

  login_message;
  private products = [];
  private infoForProducts = [];

  quantity:number;
  productName:string = '';
  price:number;
  productDesc:string = '';
  found:boolean;
  name:string ='';

  private addedProducts = [];
  constructor(private data: DataService) {}

  //FIX PROMPT BUTTONS TO YES/NO AND CHECKOUT/CONTINUE SHOPPING
  addToCart(addedProducts){
    this.data.checkoutCart.push(addedProducts)
    console.log(this.data.checkoutCart)
    //this.temp = JSON.stringify(addedProducts);
    //console.log(this.temp);
    
    
    var confirm = window.confirm("Proceeding to add to cart...");
    if(confirm==true){
      var checkout = window.confirm("Would you like to checkout or continue shopping?")
      if(checkout == true){
        checkout=true;
        console.log("Checking you out")
      }
      else{
        console.log("Not checking you out")
      }
      //alert("Item was added to your cart")
      
    }
    else{
      alert("Item was not added to your cart");
    }
  }



  postProductInfo() {
    this.data.getAllProductInfo().subscribe(
      data => this.items$ = data
      );
  }

  ngOnInit() {
    this.postProductInfo();
    this.data.currentStatus.subscribe(message => this.login_message = message)
  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
  }
}
