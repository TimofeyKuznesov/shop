import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AppState, ProductsActions, selectProductByUrl } from 'src/app/core/@ngrx';

import { ProductModel } from 'src/app/products/models';

import { ProductsService } from 'src/app/products/services';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: ProductModel;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    // в какой-то момент времени, мы покинем этот компонент, значит надо отписаться,
    // так как стор - это у нас бесконечный поток
    this.store.select(selectProductByUrl)
      .subscribe(product => this.product = {...product} );
  }

  onSaveProduct() {
    this.store.dispatch(ProductsActions.updateProduct({product: this.product}));
  }
}
