import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './header/navbar/navbar.component';
import { GeneralProductsComponent } from './general-products/general-products.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './_services/products.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ViewProductComponent } from './view-product/view-product.component'
import { SearchFilterPipe } from './layout/pipes/searchFilter.pipe';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { LoaderComponent } from './loader/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralProductsComponent,
    OtherProductsComponent,
    ViewProductComponent,
    SearchFilterPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductsService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
