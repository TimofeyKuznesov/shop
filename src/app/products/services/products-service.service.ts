import { Injectable } from '@angular/core';

import * as faker from 'faker';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private products: Array<ProductModel>;

  constructor() {
    this.products = Array(10).fill(0).map( () => new ProductModel(
      faker.commerce.productName(),
      faker.commerce.product(),
      +faker.commerce.price(),
      Categories.ALL,
      true
    ));
  }

  getProducts() {
    return this.products;
  }
}
