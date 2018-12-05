import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private checkout = [];
  total:number = 0;
  temp:string;
  

  constructor(private route: ActivatedRoute, data: DataService) { 
    this.checkout= data.checkoutCart;
    this.total = data.getTotalPrice();
  }

  

  ngOnInit() {
  }

}
