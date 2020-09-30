import { Injectable } from '@angular/core';

import * as faker from 'faker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { BackendService } from 'src/app/core/services';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<ProductModel>;
  private channel = new BehaviorSubject<Array<ProductModel>>([]);
  channel$: Observable<ProductModel[]> = this.channel.asObservable();

  constructor(private backendService: BackendService) {
  this.updateProductsFromBackend();
  }
  getAllProducts(): Observable<Array<ProductModel>> {
    return this.channel$;
  }
  getProduct(id: string | number): Promise<ProductModel> {
    return this.backendService.getProduct(id);
  }
  updateProduct(product: ProductModel) {
    this.backendService.updateProduct(product);
    this.updateProductsFromBackend();
  }

  private updateProductsFromBackend() {
    this.backendService.getProducts().then( products => {
      this.products = [...products as Array<ProductModel>];
      this.channel.next(this.products);
    });
  }
}
