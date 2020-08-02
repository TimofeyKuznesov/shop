import { Component, OnInit } from '@angular/core';

import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  products: Array<ProductModel>;
  constructor( private productService: ProductsServiceService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy() {
    console.log('click onBuy');
  }
}