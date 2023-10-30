import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataPrpductService {
  constructor(private http: HttpClient) {}

  getAllprodcucts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
