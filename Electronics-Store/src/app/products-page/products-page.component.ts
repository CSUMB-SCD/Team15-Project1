import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  
  items$: Object;

  private products = [];
  private infoForProducts = [];
  
  quantity:number;
  productName:string = '';
  price:number;
  productDesc:string = ''; 
  found:boolean;
  
  constructor(private dataService: DataService) {}

  postProductInfo() {
    this.dataService.getAllProductInfo().subscribe(
      data => this.items$ = data
      );
  } 

  ngOnInit() {
    this.postProductInfo();
  }

}
