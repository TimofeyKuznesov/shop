import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<ProductModel>; // то, что используется в шаблоне, должно быть публичным

  constructor(
      private productsServiceService: ProductsServiceService,
    ) { }

  ngOnInit() {
    this.products = this.productsServiceService.getProducts();
  }

  onBuy() {
    console.log('click onBuy');
  }

}
