import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  item$

  constructor(private route: ActivatedRoute, private data: DataService) {
    //this.route.queryParamMap.pipe(map(params => console.log(params)));
   }

  ngOnInit() {
    //this.route.queryParamMap.pipe(map(params => console.log(params)));
    this.route.params.subscribe( params => this.item$ = params.productName);
    console.log(this.item$)
  // this.data.getProductInfoByName(this.item$.productName).subscribe(
  //   data => this.item$ = data
  // )
  }

}
