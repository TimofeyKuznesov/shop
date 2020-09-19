import { Injectable, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models';

import { Subject } from 'rxjs';

import { CartModel } from '../models';
import { ProductsServiceService } from '../../products/services';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private carts: Array<CartModel> = [];
  private channel = new Subject<Array<CartModel>>();
  channel$ = this.channel.asObservable();

  constructor(private productsServiceService: ProductsServiceService) { }

  addProduct(product: ProductModel) {
    this.carts = [...this.carts, new CartModel(product)];
    this.channel.next(this.carts);
  }

}
