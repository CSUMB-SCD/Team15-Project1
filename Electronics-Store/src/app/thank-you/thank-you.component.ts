import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  login_message;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');
    window.location.reload();
    this.router.navigate(['../home']);
}

continueShopping() {
  this.router.navigate(['../products-page']);
}

}
