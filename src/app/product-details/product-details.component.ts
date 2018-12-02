import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  item$

  constructor(private route: ActivatedRoute, private data: DataService) {
    
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

  }

}
