import { Injectable } from '@angular/core';

import {ProductModel} from '../models/product-model';
import { Categories } from 'src/app/first-component/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  getProducts() {
    return [
      new ProductModel('test1', 'tes1 for example', 1, Categories.ALL, true),
      new ProductModel('test12', 'tes2 for example', 1, Categories.OTHER, true),
    ]
  }
}
