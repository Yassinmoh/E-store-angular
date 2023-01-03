import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from  '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductsModule { }
