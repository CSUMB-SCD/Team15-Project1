import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  
  //@Input() name: string;

  items$: Object;

  private products = [];
  private infoForProducts = [];
  
  quantity:number;
  productName:string = '';
  price:number;
  productDesc:string = ''; 
  found:boolean;
  
  constructor(private dataService: DataService) {}

  // viewProductDetails(productID: number){
  //   this._router.navigate(['product-details',this.items$], {
  //     queryParams: { 'productName': this.name}
  // });
  // }

  postProductInfo() {
    this.dataService.getAllProductInfo().subscribe(
      data => this.items$ = data
      );
  } 

  ngOnInit() {
    this.postProductInfo();
  }

}
