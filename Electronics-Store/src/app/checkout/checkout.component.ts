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

  boo = [];

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { 
    
    console.log(this.data.checkoutCart); 
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

    // for(let i = 0; i<this.selectedValues.length; i++){
          
    //   if(this.checkout == this.test$[i].id){
    //     this.price = this.test$[i].price;
    //     console.log(this.price);
    //   }
    // }

  }

  testFct(){
    for(let i = 0; i<this.selectedValues.length; i++){
          
      if(this.checkout == this.boo[i].id){
        this.price = this.boo[i].price;
        console.log(this.price);
      }
    }
    this.total = this.data.getTotalPrice();
  }

  getQuantity(): number{
    
    return 0;
  }

  updateCart($event, productId){
    let quantity = Number($event);
    
  
    for(let i=0;i<this.selectedValues.length;i++){
      
      if(this.checkout == this.items$[i].id){
        this.price = this.items$[i].price;
      }
      //this.getProductsForPrice(this.testData[i][2]);
      if(this.checkout[i] == productId){
        
        delete this.data.checkoutCart[productId];
        //productId, price, singleQuantity, dbQuantity, productName
        this.data.addToCart(productId, this.testData[i][0], quantity, this.testData[i][3], this.testData[i][2]);
        this.data.total=0;
        this.total = this.data.getTotalPrice();
      }
    }
    // if(this.checkout)
    // console.log(this.tempArray[productId]);

    
    //console.log(productId);
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

  getProductsForPrice(){
    this.data.getAllProductInfo().subscribe(
      data => { 
        this.items$ = data;
        this.boo = this.items$;
        console.log(this.boo);  

        this.testFct();
        
      });
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);
    this.getProductsForPrice();
    
  }
  
}