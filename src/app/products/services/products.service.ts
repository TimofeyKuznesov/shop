import { Injectable } from '@angular/core';

import * as faker from 'faker';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import products from '../../../resources/products.json';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<ProductModel>;
  private channel = new BehaviorSubject<Array<ProductModel>>([]);
  channel$: Observable<ProductModel[]> = this.channel.asObservable();

  constructor() {
    this.products = [...products];
    this.channel$ = of(this.products);
  }
  getAllProducts(): Observable<Array<ProductModel>> {
    return this.channel$;
  }
  getProduct(id: string | number): Observable<ProductModel> {
    return this.getAllProducts().pipe(
      map(x => x.filter(item => item.id === +id)),
      take(1),
      switchMap(x => of(...x))
    );
  }
}
