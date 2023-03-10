import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes:Routes =[
  {path:'products' ,component:AllProductsComponent},
  {path:'details' ,component:ProductsDetailsComponent},
  {path:'cart' ,component:CartComponent},
  {path:'**' ,redirectTo:'products',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
