import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer:FormGroup;
invalidName:string[]=['xyz','abc'];
  constructor( private fb:FormBuilder) { }

  ngOnInit() {

    this.customer=this.fb.group({

      firstname:new FormControl(null,[Validators.required,Validators.minLength(3),this.checkFirstName.bind(this)]),
      lastname:new FormControl((null)),
      passwordgroup:new FormGroup({

        password:new FormControl(null,Validators.required),
        confirm_password:new FormControl(null,Validators.required)
      },this.matchPassword.bind(this)),
        mobile_no:new FormControl(),
        email:new FormControl(),
       notification:new FormControl(),
       hobby:new FormArray([])
    });


    this.customer.get('notification').valueChanges.subscribe(

      (x)=>{

        let mobile_no=this.customer.get('mobile_no');
        let email=this.customer.get('email');

        if(x=="email"){
          email.setValidators(Validators.required);
             mobile_no.clearValidators();
        }
        else{
          email.clearAsyncValidators();
          mobile_no.setValidators(Validators.required);
        }

        email.updateValueAndValidity();
        mobile_no.updateValueAndValidity();
      }
    );
  }

  checkFirstName(x:AbstractControl):{[y:string]:boolean}
  {
    let value=x.value;
    if(this.invalidName.indexOf(value)!==-1){
      return{'invalidName':true};
    }
    return null;

  }

  matchPassword(x:AbstractControl):{[y:string]:boolean}
  {
    let password =x.get('password').value;
    let cnfpassword=x.get('confirm_password').value;

    if(password!=cnfpassword){
      return{'passwordNotMatched':true};
    }
  }
  onsubmit()
  {
    console.log(this.customer);
  }

  onaddhobby(){

    let control= new FormControl(null,Validators.required);
    (<FormArray> this.customer.get('hobby')).push(control);
  }

  ondelete(i)
  {
    (<FormArray> this.customer.get('hobby')).removeAt(i);
  }
}
