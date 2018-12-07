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

  items$;
  test$;
  private selectedValues:number[];
  private checkout = {};
  total:number = 0;
  quantityAmt:number;
  temp:string;
  quantity:string;
  private options = [];
  productName:string;
  private testData = [];
  tempArray = {};
  price:number;
  private tempArr = [];
  orig_data = [];

  user_credit:number = 0;
  new_credit;

  prices:number [] = [];

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

    this.user_credit = this.data.new_credit;
    console.log(this.user_credit);
    console.log(this.data.checkoutCart);
    this.orig_data = Object.values(data.checkoutCart);
+   console.log('orig', this.orig_data);

    this.checkout = Object.keys(data.checkoutCart);
    this.testData = Object.values(data.checkoutCart);
    this.tempArray = data.checkoutCart;

    for(var key in this.checkout){
      this.testData.push(this.checkout[key]);
    }

    this.selectedValues = [];
    this.selectedValues.length = Object.keys(this.checkout).length;
    
   
    for(let i = 0; i < this.selectedValues.length; i++) {
        this.selectedValues[i] = this.testData[i][1];
    }

    this.total = data.getTotalPrice();

  }

  setPrices(){
    for(let i = 0; i<this.selectedValues.length; i++){
          
        this.prices[i] = this.orig_data[i][0];
        
    }
    this.total = this.data.getTotalPrice();
    console.log('setPrices', this.total);
  }

  

  getQuantity(): number{

    return 0;
  }
  
  updateCart($event, productId){
    let quantity = Number($event);
    this.data.checkoutCart[productId][1] = quantity;
    this.total = this.data.getTotalPrice();
  
    // for(let i=0;i<this.selectedValues.length;i++){
      
    //   if(this.checkout[i] == productId){
        
    //     delete this.data.checkoutCart[productId];
    //     //productId, price, singleQuantity, dbQuantity, productName
    //     this.data.addToCart(productId, this.testData[i][0], quantity, this.testData[i][3], this.testData[i][2]);
    //     this.data.total=0;
    //     this.total = this.data.getTotalPrice();
    //   }
    // }
 
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

  getProductsForPrice(){
    this.data.getAllProductInfo().subscribe(
      data => { 
        this.items$ = data;
        this.setPrices();
        
      });
  }
  
  newCreditStatus(changeCreditStatus){
    this.data.changeCurrentCreditStatus(changeCreditStatus);
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);
    this.getProductsForPrice();
    this.data.currentUserCreditStatus.subscribe(creditMessage => this.userCreditMessage = creditMessage);
  }

}
