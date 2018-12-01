import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule }      from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items$: Object;
    login_message;

   name:string = '';
   found:boolean;

  constructor(private dataService: DataService,  private data: DataService) { }


  onNameKeyUp(event:any) {
     this.name = event.target.value;
     this.found = false;
  }

  getProductInfo(){
    this.dataService.getProductInfoByName(this.name).subscribe(data => this.items$ = data);
     console.log(this.items$)
     this.found = true;
  }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message)
  }
  signOut() {
    this.login_message = 'no';
    this.data.changeMessage('no');

}
