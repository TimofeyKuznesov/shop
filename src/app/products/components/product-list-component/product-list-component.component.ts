import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

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

  products$: Observable<Array<ProductModel>>;
  constructor(
      public productsServiceService: ProductsServiceService,
      private cartServiceService: CartServiceService,
      private changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.products$ = this.productsServiceService.channel$;
  }

  onAddProduct(product: ProductModel) {
    this.cartServiceService.addProduct(product);
  }
}
