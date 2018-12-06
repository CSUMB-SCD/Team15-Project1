import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.model));
    console.log(this.model);
    this.router.navigate(['../thank-you']);
  }
}
