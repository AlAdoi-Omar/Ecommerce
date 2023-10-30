import { Component, Input, OnInit } from '@angular/core';
import { DataPrpductService } from '../service/data-prpduct.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProduct: any = [];
  allCategorie: any = [];
  constructor(private dataService: DataPrpductService) {}
  ngOnInit() {
    this.getProduct();
    this.getCategorie();
  }
  getProduct() {
    this.dataService.getAllprodcucts().subscribe({
      next: (res) => {
        this.allProduct = res;
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
  getCategorie() {
    this.dataService.getAllcategories().subscribe({
      next: (res) => {
        this.allCategorie = res;
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
  filter(event: any) {
    let cat = event.target.value;
    this.dataService.getAllProductbycategorie(cat).subscribe({
      next: (res) => {
        this.allProduct = res;
      },
    });
  }
}
