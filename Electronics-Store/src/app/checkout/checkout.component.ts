import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private data: DataService) { 
  
    console.log(this.data.checkoutCart); 
    this.checkout = Object.keys(data.checkoutCart);
    this.testData = Object.values(data.checkoutCart);

    for(var key in this.checkout){
      this.testData.push(this.checkout[key]);
      this.price = this.testData[key][0];
    }
    
    console.log(this.price);
    this.selectedValues.length = Object.keys(this.checkout).length;


    //let product = this.checkout[i];
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




  // range:string[] = length => {
  //   var testArray:string[];
  //   for(let i = 0; i <length; i++){
  //     testArray.push(String(i));
  //   }
  //   return testArray;
  // }

  // range(value){
  //   testArray = [];
  //   this.testArray.length = value;
  //   for(let i of this.checkout){
  //     this.testArray.push(i);
  //   }
  //   return this.testArray;
  // }


  // getQuantityForAllProducts(){
  //   this.quantity="";

  //   console.log("what is being called")
  //   console.log(this.checkout);
  //   for(let i=0;i<this.selectedValues.length;i++){
  //      if(this.checkout[i].productName == this.checkout[i].productName){
  //       console.log(this.data.checkoutCart[i]);
  //       console.log(this.checkout[i].quantity);
  //       this.quantity = this.checkout[i].quantity;
  //       this.getQuantity(this.quantity);
  //       break;
  //     }
  //   }
  // }

  // getQuantity(amountAvail){
  //   //this.options.pop();
  //   //console.log(this.options);
  //   this.quantityAmt = Number(amountAvail);
  //   for(let i=0;i<=this.quantityAmt;i++){
  //     this.options.push(String(i));
  //   }
  //   console.log(this.options);
  // }

  

  ngOnInit() {
    //this.getQuantityForAllProducts();
    
  }

}
