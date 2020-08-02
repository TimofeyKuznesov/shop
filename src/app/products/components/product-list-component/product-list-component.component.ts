import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  private products: Array<ProductModel>;
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
