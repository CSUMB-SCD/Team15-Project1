import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';
import { DataService } from '../data.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  items$: Object;
  idk$: Object;
  login_message;
  private products = [];
  private infoForProducts = [];

  quantity:number;
  productName:string = '';
  price:number;
  productDesc:string = '';
  found:boolean;
  name:string ='';
  productId:string;


  private addedProducts = [];
  constructor(private data: DataService) {}

  addToCart(addedProducts) {
    //this.data.checkoutCart[this.productId]=[this.price,this.quantityAmt];
    //console.log(this.data.checkoutCart)

    // this.data.test.push(addedProducts);
    // this.productId = this.items$[0].id;
    // this.price = this.items$[0].price;
    // this.quantity = this.items$[0].quantity;
    // this.data.addToCart(this.productId, this.price, 1);

    this.productId = addedProducts.id;
    this.price = addedProducts.price;
    this.quantity = addedProducts.quantity;
    this.productName = addedProducts.productName;

    this.data.addToCart(this.productId, this.price, 1, this.quantity, this.productName);

    document.getElementById('id_confrmdiv').style.display = 'block'; //this is the replace of this line

    document.getElementById('id_truebtn').onclick = function() {
       // do your delete operation
      document.getElementById('id_confrmdiv').style.display = 'none';
      document.getElementById('id_continuediv').style.display = 'block';
      document.getElementById('truebtn2').onclick = function() {
        document.getElementById('id_continuediv').style.display = 'none';
      };
       document.getElementById('falsebtn2').onclick = function() {
         document.getElementById('id_continuediv').style.display = 'none';
       };
        //alert('true');
    };

    document.getElementById('id_falsebtn').onclick = function() {
      console.log('Not checking you out');
      document.getElementById('id_confrmdiv').style.display = 'none';
         //alert('false');
       return false;
    };
  }


  postProductInfo() {
    this.data.getAllProductInfo().subscribe(
      data => {
         this.items$ = data;
      
      });
  }

  ngOnInit() {
    this.postProductInfo();
    this.data.currentStatus.subscribe(message => this.login_message = message);
  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
  }
}
