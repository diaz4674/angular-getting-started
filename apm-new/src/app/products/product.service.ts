import { Injectable } from "@angular/core";
import { IProduct } from "./products";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    getProducts(): IProduct[] {
        return [
              {
    "productId": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon cap rolling garden cart",
    "imageUrl": "assets/images/garden_cart.png",
    "price": 32.99,
    "starRating": 4.2
  },
  {
    "productId": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-9923",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon cap rolling garden cart",
    "imageUrl": "assets/images/garden_cart.png",
    "price": 32.99,
    "starRating": 4.2
  }
        ];
    }
}