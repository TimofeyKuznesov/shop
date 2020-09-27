import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart/services';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<ProductModel>>;
  constructor(
      public productsService: ProductsService,
      private cartService: CartService,
      private changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.products$ = this.productsService.channel$;
  }

  onAddProduct(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
