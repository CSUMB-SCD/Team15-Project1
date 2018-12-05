import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  temp$
  item$
  test:number;
  temp:string;
  quantityAmt:number;
  private addedProducts = [];
  selectedValue: string;
  private options = []; //= ["1","2","3","4"]

  price:string;
  quantity:string;
  productName:string;
  productDesc:string;
  img1:string;
  img2:string;
  img3:string;

  login_message;


  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

   setQuantityAmt($amount){
     this.quantityAmt = Number($amount);
     console.log($amount);
   }

   getQuantity(){
    this.quantityAmt = Number(this.quantity);
    for(let i=0;i<=this.quantityAmt;i++){
      this.options.push(String(i));
      }
   }

   addToCart(){
    for(let i=0;i<this.quantityAmt;i++){
      this.data.checkoutCart.push(this.temp$[0]);
    }
     console.log(this.data.checkoutCart);

    var confirm = window.confirm("Proceeding to add to cart...");
    if(confirm==true){
      var checkout = window.confirm("Would you like to checkout or continue shopping?")
      if(checkout == true){
        checkout=true;
        console.log("Checking you out");
      }
      else{
        console.log("Not checking you out");
      }
      //alert("Item was added to your cart")

    }
    else{
      alert("Item was not added to your cart");
    }
  }




   getAllProductDetails(){

    const param: string = this.route.snapshot.queryParamMap.get('productName');
    console.log(param);

    this.data.getProductInfoByName(param).subscribe(
      data => {
        this.temp$ = data;
        this.item$ = data[0];
        this.productName = this.item$.productName;
        this.quantity= this.item$.quantity;
        this.price = this.item$.price;
        this.productDesc = this.item$.productDesc;
        this.img1 = this.item$.image;
        this.img2 = this.item$.image2;
        this.img3 = this.item$.image3;

        this.getQuantity();
      });


   }


  ngOnInit() {

    this.getAllProductDetails();
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    window.location.reload();
    this.router.navigate(['../home']);
}

}
