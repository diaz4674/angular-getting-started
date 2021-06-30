import { Component } from '@angular/core';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any[] = [{
    "productID": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "imageURL": "assets/images/garden_cart.png",
    "price": 32.99,
    "starRating": 4.2
  },

  {
    "productID": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "imageURL": "assets/images/garden_cart.png",
    "price": 32.99,
    "starRating": 4.2
  }
  ];
}
