import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, catchError, take, delay, tap, filter, first } from 'rxjs/operators';

import { AppState, RouterActions, selectProductByUrl, selectProductsLoaded, ProductsActions } from 'src/app/core/@ngrx';

import { ProductModel } from 'src/app/products/models';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel | void>, CanActivate {
  constructor(
    private store: Store<AppState>
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    console.log('ProductResolve Guard is called');

    return this.store.select(selectProductByUrl).pipe(
      map( (product: ProductModel | void) => {
        if (product) {
          return product;
        } else {
          this.store.dispatch(RouterActions.go({
            path: ['/admin']
          }));
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.store.dispatch(RouterActions.go({
          path: ['/admin']
        }));
        return of(null);
      })
    );
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectProductsLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(ProductsActions.loadProducts());
        }
      }),
      filter(loaded => loaded),
      first()
    );
  }
}
