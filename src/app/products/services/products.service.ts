import { Injectable } from '@angular/core';

import * as faker from 'faker';
import { Observable, of, Subject } from 'rxjs';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<ProductModel>;
  private channel = new Subject<Array<ProductModel>>();
  channel$: Observable<ProductModel[]>;

  constructor() {
    this.products = Array(10).fill(0).map( () => new ProductModel(
      faker.commerce.productName(),
      faker.commerce.product(),
      +faker.commerce.price(),
      Categories.ALL,
      Math.random() >= 0.5
    ));
    this.channel$ = of(this.products);
  }
}
