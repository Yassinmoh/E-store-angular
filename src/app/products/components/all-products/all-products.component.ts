import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  
  products$ = this.productService.getAllProducts()
  categories: any[] = []
  isLoading: boolean = false;

  getAllCategories() {
    this.isLoading= true;
    this.productService.getAllCategories().subscribe((data: any) => {
      this.categories = data
      this.isLoading= false;
      console.log(this.categories);
    })
  }

  getSelectedCategory(event: any) {
    this.isLoading= true;
    let value :any = event.target.value
    value == 'all' ? this.productService.getAllProducts():this.filterProducts(value)
    this.isLoading= false;
      // this.products$ = this.productService.getAllProducts()

      // console.log(selectedCategory);
      // this.filterProducts(selectedCategory)

  }

  filterProducts(key: any) {
    this.products$ = this.productService.getFilterProducts(key)
  }




  ngOnInit(): void {
    this.getAllCategories()


  }
}
