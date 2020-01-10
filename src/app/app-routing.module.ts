import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralProductsComponent } from './general-products/general-products.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'general_products',
    pathMatch: 'full'
  },
  {
    path: 'general_products',
    component: GeneralProductsComponent
  },
  {
    path: 'other_products',
    component: OtherProductsComponent
  },
  {
    path: 'view_product',
    component: ViewProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
