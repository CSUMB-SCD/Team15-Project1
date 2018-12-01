import { Component, OnInit, Input } from '@angular/core';
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
  
  constructor(private data: DataService) {}

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
