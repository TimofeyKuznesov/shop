import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartServiceService } from 'src/app/cart/services';

import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponentComponent implements OnInit {

  products: Array<ProductModel>;
  constructor(
      private productsServiceService: ProductsServiceService,
      private cartServiceService: CartServiceService
    ) { }

  ngOnInit() {
    this.products = this.productsServiceService.getProducts();
  }

  onAddProduct(product: ProductModel) {
    this.cartServiceService.addProduct(product);
  }
}
