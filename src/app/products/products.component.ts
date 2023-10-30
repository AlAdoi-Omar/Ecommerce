import { Component, Input, OnInit } from '@angular/core';
import { DataPrpductService } from '../service/data-prpduct.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProduct: any = [];
  constructor(private dataService: DataPrpductService) {}
  ngOnInit() {
    this.getProduct();
    this.getProduct();
  }
  getProduct() {
    this.dataService.getAllprodcucts().subscribe({
      next: (res) => {
        this.allProduct = res;
      },
    });
  }
}
