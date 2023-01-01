import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

constructor(private productService:ProductsService){}
  products$ =this.productService.getAllProducts()
  categories :any[] =[]


  getAllCategories(){
      this.productService.getAllCategories().subscribe((data:any)=>{
      this.categories = data
      console.log(this.categories);
    })
  }

  getEvent(event:any){
    let selectedCategory =event.target.value
    console.log(selectedCategory);
    this.filterProducts(selectedCategory)
  }

  filterProducts(key:any){
    this.products$ =this.productService.getFilterProducts(key)
  }
  ngOnInit(): void {
    this.getAllCategories()
  }
}
