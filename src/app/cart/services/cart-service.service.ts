import { Injectable, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models';

import { Subject } from 'rxjs';

import { CartModel } from '../models';
import { ProductsServiceService } from '../../products/services';
import { CartsInfoModel } from '../models/carts-info';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartsInfo: CartsInfoModel = new CartsInfoModel([]);
  private total = 0;
  private totalSum = 0;
  private channel = new Subject<CartsInfoModel>();
  channel$ = this.channel.asObservable();

  constructor(private productsServiceService: ProductsServiceService) { }

  addProduct(product: ProductModel) {
    this.cartsInfo = new CartsInfoModel([...this.cartsInfo.carts, new CartModel(product)]);
    this.channel.next(this.cartsInfo);
  }

  removeCart(removeCart: CartModel) {
    this.cartsInfo = new CartsInfoModel(this.cartsInfo.carts.filter(cart => cart !== removeCart));
    this.channel.next(this.cartsInfo);
  }

}
