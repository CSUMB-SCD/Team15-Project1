import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  login_message;
  userCreditMessage;

  user_credit:number=0;
  total:number=0;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
  
    this.user_credit = this.data.new_credit;
    this.total = this.data.total;
  
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);
    this.data.currentUserCreditStatus.subscribe(creditMessage => this.userCreditMessage = creditMessage);
    console.log(this.userCreditMessage);
  }

  // confirmValidPurchase(){
  //   if(this.userCreditMessage == 'enough'){

  //   }
  // }
  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    window.location.reload();
    this.router.navigate(['../home']);
}

confirmationNumber(): number {
  return Math.floor(Math.random() * Math.floor(100000000));
}

continueShopping() {
  // this.login_message = 'yes';
  // this.data.changeMessage('yes');
  this.router.navigate(['../products-page']);
}
}
