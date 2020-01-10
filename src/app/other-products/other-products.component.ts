import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../_services/products.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css']
})
export class OtherProductsComponent implements OnInit {
  products: any = {}

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts()
  }

  async getProducts() {
    const result = await this.productService.getProducts()
    const products = Object.entries(result)
    this.products.other_products = products.filter((data: any) => {
      if (data[1].hub != 'general') {
        return data
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products.other_products, event.previousIndex, event.currentIndex);
  }

  viewProduct(product, title) {
    product['title'] = title
    this.router.navigate(['view_product'], { queryParams: product });
  }

}
