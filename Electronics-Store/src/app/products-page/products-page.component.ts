import { Router } from '@angular/router';
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

  constructor(private data: DataService, private router: Router) {}

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
    this.router.navigate(['../home']);
  }
}
