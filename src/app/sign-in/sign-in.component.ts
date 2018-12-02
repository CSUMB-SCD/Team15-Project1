import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  users$: Object;
  login_message = 'yes';

  constructor(private data: DataService, private router: Router) {}

  onSubmit(username, password) {
    let success = false;

      if (this.users$[0].username === username
        && this.users$[0].password === password) {
        success = true;
      }
      if (this.users$[1].username === username
        && this.users$[1].password === password) {
        success = true;
      }
      if (this.users$[2].username === username
        && this.users$[2].password === password) {
        success = true;
      }
//////

    if (success) {
      this.login_message = 'yes';
      this.newMessage(this.login_message);
    }
    if(success === false){
      this.login_message = 'no';
      this.newMessage(this.login_message);
    }
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.users$ = data);
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }

  newMessage(changeStatus) {
    this.data.changeMessage(changeStatus)
  }
  signOut() {
    this.login_message = 'no';
    this.newMessage(this.login_message);
  }
}

//   constructor() { }

//   ngOnInit() {
//   }

// }
