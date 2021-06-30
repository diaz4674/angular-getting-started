import { Component } from '@angular/core';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [{
    "productID": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "price": 32.99,
    "starRating": 4.2
  },

{
    "productID": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "price": 32.99,
    "starRating": 4.2
  }
];
}
