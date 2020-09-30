import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError, take, delay } from 'rxjs/operators';

import { ProductModel } from 'src/app/products/models';

import { ProductsService } from 'src/app/products/services';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel | void> {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}
  resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | void> {
    console.log('ProductResolve Guard is called');

    const id = route.paramMap.get('productID');

    return this.productService.getProduct(id).then(
      (item: ProductModel) => {
        if (item) {
          return item;
        } else {
          this.router.navigate(['/admin']);
          return null;
        }
      })
      .catch(() => {
        this.router.navigate(['/admin']);
      });
  }
}
