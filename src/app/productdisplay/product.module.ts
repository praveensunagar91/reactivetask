import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProductdisplayComponent } from './productdisplay.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { productrouting } from './product.routing';


@NgModule({

  declarations:[

    ProductdisplayComponent,
    SidebarComponent,
    ProductaddComponent,
    EditproductComponent
  ],

  imports:[

    CommonModule,
    FormsModule,
    productrouting

  ],
})


export class Productmodule {}
