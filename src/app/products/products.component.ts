import { Component, Input } from '@angular/core';
import { ProductShow } from '../product-show';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  product: ProductShow[] = [
    {
      id: 1,
      name: 'Ipad',
      price: 1000,
      category: 'mobile',
      imgurl:
        'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=200&h=250&dpr=1',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Dell',
      price: 5000,
      category: 'computer',
      imgurl:
        'https://images.pexels.com/photos/1432674/pexels-photo-1432674.jpeg?auto=compress&cs=tinysrgb&w=200',
      quantity: 10,
    },
    {
      id: 3,
      name: 'hp',
      price: 3500,
      category: 'computer',
      imgurl:
        'https://images.pexels.com/photos/13791400/pexels-photo-13791400.jpeg?auto=compress&cs=tinysrgb&w=200',
      quantity: 12,
    },
    {
      id: 4,
      name: 'Iphpne',
      price: 5500,
      category: 'Apple-Mobile',
      imgurl:
        'https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=200',
      quantity: 8,
    },
  ];
  Total: number = 0;

  constructor() {}
  public change(
    price: number,
    numberInput: any,
    quantity: number,
    index: number
  ) {
    if (quantity >= numberInput.value) {
      this.product[index].quantity -= parseInt(numberInput.value);
      this.Total += price * parseInt(numberInput.value);
      numberInput.value = '';
    } else {
      alert(`العدد المدخل أكبر من العدد الموجود`);
    }
  }
}
