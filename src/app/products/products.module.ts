import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from  '@angular/common/http';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
