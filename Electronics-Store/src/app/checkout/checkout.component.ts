import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  login_message;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.checkout = data.checkoutCart;
    this.total = data.getTotalPrice();
  }



  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    window.location.reload();
    this.router.navigate(['../home']);
}

}
