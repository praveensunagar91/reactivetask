import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';



const arr: Routes=[

  {path:'',children:[

    {path:'',component:ProductdisplayComponent},
    {path:'addproduct',component:ProductaddComponent},
    {path:'editproduct/:pro_id',component:EditproductComponent}


  ]},


];

export const productrouting=RouterModule.forChild(arr);
