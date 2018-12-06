import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
//import * as angular from "angular";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  login_message;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentStatus.subscribe(message => this.login_message = message);

  }

}
