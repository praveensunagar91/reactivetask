import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;

  constructor( private fb:FormBuilder,private router:Router, private data:UserdataService) { }

  ngOnInit() {

    this.login=this.fb.group({

      user_email: new FormControl(),
      user_password: new FormControl()
    });

  }

  onLoginSubmit(){

    this.data.login(this.login.value.user_email,this.login.value.user_password);



  if (this.data.redirectURL) {
    this.router.navigateByUrl(this.data.redirectURL);
  } else {
    this.router.navigate(["/users"]);
  }
  }
}
