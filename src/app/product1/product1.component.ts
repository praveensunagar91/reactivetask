import { Component, OnInit } from '@angular/core';
import { Product } from '../productdisplay/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  arr:Product[]=[];
  productdata:any;
  errormsg:string;

  constructor(private act:ActivatedRoute) {

    this.productdata=this.act.snapshot.data['pdata'];
  }

  ngOnInit() {

    this.arr=this.productdata.products;
    this.errormsg=this.productdata.errormsg;
  }

}
