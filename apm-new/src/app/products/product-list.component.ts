import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  
  private _listFilter: string = ''; //

  get listFilter(): string { return this._listFilter; }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] =[
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
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLowerCase().includes(filterBy))
  }

  ngOnInit(): void {
    this.listFilter = 'cart'
  }

  onRatingClicked(message:string): void {
    console.log(message)
    this.pageTitle='Product List: ' + message;
  }
}
