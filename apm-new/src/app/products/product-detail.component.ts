import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';
import {ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage='';

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`
    // if(id){
    //   this.getProduct(id);
    // }
  }

  // getProduct(id: number): void {
  //   this.productService.getProducts(id).subscribe({
  //     next: product => this.product = product,
  //     error: err => this.errorMessage = err
  //   })
  // }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
