import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoaderComponent implements OnInit {

  loading: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
  ngOnInit() {
  }

}