import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-products',
  templateUrl: './general-products.component.html',
  styleUrls: ['./general-products.component.css']
})
export class GeneralProductsComponent implements OnInit {
  products: any = {}

  constructor(private productService: ProductsService, private router:Router) { }

  ngOnInit() {
    this.getProducts()
  }

  async getProducts() {
    const result = await this.productService.getProducts()
    const products = Object.entries(result)
    this.products.general_products = products.filter((data: any) => {
      if (data[1].hub == 'general') {
        return data
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products.general_products, event.previousIndex, event.currentIndex);
  }

  viewProduct(product, title) {
    product['title'] = title
    this.router.navigate(['view_product'], { queryParams: product });
  }


}
