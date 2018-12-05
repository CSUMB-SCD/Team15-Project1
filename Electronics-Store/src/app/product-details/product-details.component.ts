import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  item$
  login_message;


  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

   }

   getAllProductDetails(){

    const param: string = this.route.snapshot.queryParamMap.get('productName');
    console.log(param);

    this.data.getProductInfoByName(param).subscribe(
      data => this.item$ = data
      );
   }


  ngOnInit() {

    this.getAllProductDetails();
    this.data.currentStatus.subscribe(message => this.login_message = message)


  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    this.router.navigate(['../home']);
}

}
