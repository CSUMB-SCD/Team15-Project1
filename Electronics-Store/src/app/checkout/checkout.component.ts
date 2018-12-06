import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  login_message;
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


  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { 
  
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
    this.router.navigate(['../checkout-info']);
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }
  
}