import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { CartService } from 'src/app/cart/services';

import { AppState, ProductsActions, ProductsState } from 'src/app/core/@ngrx';

import { ProductsService } from '../../services/products.service';
import { Categories, ProductModel } from '../../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  products$: Observable<ProductsState>;
  categories = Categories;
  constructor(
      public productsService: ProductsService,
      private cartService: CartService,
      private changeDetectorRef: ChangeDetectorRef, // ?
      private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select('products'));
    this.store.dispatch(ProductsActions.loadProducts());
  }

  onAddProduct(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
