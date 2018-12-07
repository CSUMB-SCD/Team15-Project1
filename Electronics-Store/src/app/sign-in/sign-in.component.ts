import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  users$: Object;
  login_message;
  model: any = {};
  success;

  new_credit;

  constructor(private data: DataService, private router: Router, private spinner: NgxSpinnerService) {}

  onSubmit(username, password) {
    // let success;
    let valid = false;
    let invalid = false;
    // let blank;
    let i;

    for (i = 0; i < 3; i++) {
      if (this.users$[i].username === username &&
        this.users$[i].password === password) {
          this.success = true;
          this.data.currCredit(this.users$[i].username);
          this.new_credit = this.users$[i].credit;
          // console.log(this.new_credit);
        }
        else if (this.users$[i].username === username &&
          this.users$[i].password !== password) {
            valid = true;
          }
        else if (username !== this.users$[i].username && password) {
            invalid = true;
          }
    }

//////
    if (this.success) {
      this.login_message = 'yes';
      this.newMessage(this.login_message);
      this.router.navigate(['../products-page']);
    }
    else if(valid) {
      this.login_message = 'no';
      this.newMessage(this.login_message);
      alert('Invalid passsword. Please enter correct password.');
    }
    else if(invalid) {
      this.login_message = 'no';
      this.newMessage(this.login_message);
      alert('Invalid login. Please enter valid login credentials.');
    }

  }


  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }

  newMessage(changeStatus) {
    this.data.changeMessage(changeStatus);
  }
  signOut() {
    this.login_message = 'no';
    this.newMessage(this.login_message);
  }
}
