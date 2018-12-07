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
  userCreditMessage;
  login_message;


  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.currentUserCreditStatus.subscribe(creditMessage => this.userCreditMessage = creditMessage);
    console.log(this.userCreditMessage);
    this.data.currentStatus.subscribe(message => this.login_message = message);
  }


  newCreditStatus(changeCreditStatus){
    this.data.changeCurrentCreditStatus(changeCreditStatus);
  }
  onSubmit() {
    // alert(JSON.stringify(this.model));
    console.log(this.model);
    this.router.navigate(['../thank-you']);
  }
}
