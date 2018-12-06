import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  users$;

  login_message;
  userCreditMessage;
  model: any = {};

  test$;
  private selectedValues:string[] = [];
  private checkout = {};
  total:number = 0;
  quantityAmt:number;
  temp:string;
  quantity:string;
  private options = [];
  productName:string;
  private testData = [];
  price:number;
  private tempArr = [];

  user_credit:number = 0;
  new_credit;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

    this.user_credit = this.data.new_credit;
    console.log(this.user_credit);
    console.log(this.data.checkoutCart);
    this.checkout = Object.keys(data.checkoutCart);
    this.testData = Object.values(data.checkoutCart);

    for(var key in this.checkout){
      this.testData.push(this.checkout[key]);
      this.price = this.testData[key][0];
    }

    console.log(this.price);
    this.selectedValues.length = Object.keys(this.checkout).length;

    for(let i = 0; i < this.selectedValues.length; i++) {
        this.selectedValues[i] = this.testData[i].quantity;
    }
    this.total = data.getTotalPrice();
  }

  getQuantity(): number{

    return 0;
  }

  range(length:number): number[] {
    var testArray : number[] = [];
    for(let i = 1; i <= length; i++){
      testArray.push(i);
    }
    return testArray;
  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    window.location.reload();
    this.router.navigate(['../home']);
  }

  confirmPurchase() {
    // console.log(this.data.getUsersByName(this.username));
    // this.router.navigate(['../checkout-info']);

    if((this.user_credit - this.total) <= 0){
      this.userCreditMessage = 'notEnough';
      this.newCreditStatus(this.userCreditMessage);
      // alert('You do not have enough credit');
    }
    else{
      this.userCreditMessage = 'enough';
      this.newCreditStatus(this.userCreditMessage);
    }
    this.router.navigate(['../checkout-info']);
    console.log(this.user_credit - this.total);
  }

  newCreditStatus(changeCreditStatus){
    this.data.changeCurrentCreditStatus(changeCreditStatus);
  }
  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);
    this.data.currentUserCreditStatus.subscribe(creditMessage => this.userCreditMessage = creditMessage);
  }

}
