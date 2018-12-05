import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const param: string = this.route.snapshot.queryParamMap.get('this.addedProducts');
    console.log(param);
  }

}
