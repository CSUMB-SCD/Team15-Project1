import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  temp$;
  public item$;
  test:number;
  temp:string;
  quantityAmt:number = 1;
  private addedProducts = [];
  selectedValue: string;
  private options = [];

  price:string;
  quantity:string;
  productName:string;
  productDesc:string;
  img1:string;
  img2:string;
  img3:string;
  productId:string;

  login_message;


  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

   }

   setQuantityAmt($amount){
     this.quantityAmt = Number($amount);
   }

   getQuantity(){
    for(let i=1;i<=Number(this.quantity);i++) {
      this.options.push(String(i));
      }
   }

  addToCart() {
    this.data.addToCart(this.productId, this.price, this.quantityAmt,this.quantity,this.productName);
    document.getElementById('prod_continuediv').style.display = 'block';
    document.getElementById('Prodtruebtn2').onclick = function() {
    };
    document.getElementById('Prodfalsebtn2').onclick = function() {
      document.getElementById('prod_continuediv').style.display = 'none';
    };
 
  }

   getAllProductDetails(){

    const param: string = this.route.snapshot.queryParamMap.get('productName');

    this.data.getProductInfoByName(param).subscribe(
      data => {

        this.temp$ = data;
        this.item$ = data[0];
        this.productName = this.item$.productName;
        this.quantity= this.item$.quantity;
        this.productId = this.item$.id;
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
