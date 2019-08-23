import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private data:UserdataService) { }

  ngOnInit() {
  }

  logout()
  {
    this.data.logout();
  }

  islogged()
  {
   return this.data.isLoggedIn;
  }
}
