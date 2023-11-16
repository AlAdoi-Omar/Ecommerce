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
  isloading: boolean = false;
  constructor(private dataService: DataPrpductService) {}
  ngOnInit() {
    this.getProduct();
    this.getCategorie();
  }
  getProduct() {
    this.isloading = true;
    this.dataService.getAllprodcucts().subscribe({
      next: (res) => {
        this.allProduct = res;
        this.isloading = false;
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
  getCategorie() {
    this.isloading = true;
    this.dataService.getAllcategories().subscribe({
      next: (res) => {
        this.allCategorie = res;
        this.isloading = false;
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
  filter(event: any) {
    let cat = event.target.value;
    cat == 'All' ? this.getProduct() : this.getProductByCategorie(cat);
  }
  getProductByCategorie(cat: string) {
    this.isloading = true;
    this.dataService.getAllProductbycategorie(cat).subscribe({
      next: (res) => {
        this.allProduct = res;
        this.isloading = false;
      },
    });
  }
}
