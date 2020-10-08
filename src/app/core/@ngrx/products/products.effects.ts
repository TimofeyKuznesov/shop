import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ProductsService } from 'src/app/products/services';

import { RouterActions } from '../router';

import * as ProductsActions from './products.actions';


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
    ) {}

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      concatMap( action => this.productsService.getAllProducts().pipe(
        map(products => ProductsActions.loadProductsSuccess({products})),
        // catchError( error => {ProductsActions.loadProductsFailure({error})})
      ))
    ),
    { useEffectsErrorHandler: false }
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      switchMap(
          ({product}) => this.productsService.updateProduct(product)
            .then((response) => {
              return ProductsActions.updateProductSuccess({oldProduct: product, newProduct: response});
            })
            .catch(error => ProductsActions.updateProductFailure({error}))
        )
    ));

    updateProductSuccess$: Observable<Action> = createEffect(
      () => this.actions$.pipe(
        ofType(ProductsActions.updateProductSuccess),
        concatMap(
          ({oldProduct, newProduct}) => {
            if (oldProduct.id !== newProduct.id) {
              return of(ProductsActions.loadProducts(), RouterActions.go({
                path: [`/admin/product/edit/${newProduct.id}`]
              }));
            } else {
              return of(ProductsActions.loadProducts());
            }
          }
        )
      )
    );
}
