import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product:any = {};
  constructor(private _route: ActivatedRoute,) { }

  ngOnInit() {
     this._route.queryParams
    .subscribe(params => {
      this.product = params
    });
  }

}
