import { Injectable } from '@angular/core';

import {ProductModel, Categories} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private products: Array<ProductModel>;

  constructor() { }

  getProducts() {
    return [
      new ProductModel('test1', 'tes1 for example', 1, Categories.ALL, true),
      new ProductModel('test12', 'tes2 for example', 1, Categories.OTHER, true),
    ];
  }
}
