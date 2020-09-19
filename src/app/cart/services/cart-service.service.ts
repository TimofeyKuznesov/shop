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
    const updateCart = this.cartsInfo.carts.find( cart => cart.product === product);
    if(updateCart){
      this.cartsInfo = new CartsInfoModel(this.cartsInfo.carts.map(
         cart => cart.product !== product ? cart : {...cart, count: cart.count + 1}
         ));
    } else {
      this.cartsInfo = new CartsInfoModel([...this.cartsInfo.carts, new CartModel(product)]);
    }
    this.channel.next(this.cartsInfo);
  }

  removeProduct(removeProduct: ProductModel) {
    this.cartsInfo = new CartsInfoModel(this.cartsInfo.carts.map(
      cart => cart.product !== removeProduct ? cart : {...cart, count: cart.count - 1}
      ).filter( ({count}) => count > 0));
    this.channel.next(this.cartsInfo);
  }

  removeCart(removeCart: CartModel) {
    this.cartsInfo = new CartsInfoModel(this.cartsInfo.carts.filter(cart => cart !== removeCart));
    this.channel.next(this.cartsInfo);
  }

}
