import { Injectable } from '@angular/core';

import * as faker from 'faker';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<ProductModel>;
  private channel = new BehaviorSubject<Array<ProductModel>>([]);
  channel$: Observable<ProductModel[]> = this.channel.asObservable();

  constructor() {
    this.products = Array(10).fill(0).map( (_, i) => new ProductModel(
      i,
      faker.commerce.productName(),
      faker.commerce.product(),
      +faker.commerce.price(),
      Categories.ALL,
      Math.random() >= 0.5
    ));
    this.channel$ = of(this.products);
  }
  getAllProducts(): Observable<Array<ProductModel>> {
    return this.channel$;
  }
  getProduct(id: string): Observable<ProductModel> {
    return this.getAllProducts().pipe(
      map(x => x.filter(item => item.id === +id)),
      take(1),
      switchMap(x => of(...x))
    );
  }
}
