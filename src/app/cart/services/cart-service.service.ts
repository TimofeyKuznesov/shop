import { Injectable, OnInit } from '@angular/core';


import { Subject } from 'rxjs';

import { ProductModel } from 'src/app/products/models';

import { CartModel } from '../models';
import { ProductsServiceService } from '../../products/services';
import { CartsInfoModel } from '../models/carts-info';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartProducts: Array<CartModel> = [];
  private totalQuantity  = 0;
  private totalSum = 0;
  private channel = new Subject<CartsInfoModel>();
  channel$ = this.channel.asObservable();

  constructor(private productsServiceService: ProductsServiceService) { }

  addProduct(product: ProductModel, quantity: number = 1) {
    const updateCart = this.cartProducts.find( cart => cart.product === product);
    if(updateCart){
      this.cartProducts = this.cartProducts.map(
         cart => cart.product !== product ? cart : {...cart, count: cart.count + quantity}
         );
    } else {
      this.cartProducts = [...this.cartProducts, new CartModel(product, quantity)];
    }
    this.updateCartData();
  }

  removeProduct(removeCart: CartModel) {
    this.cartProducts = this.cartProducts.filter(cart => cart !== removeCart);
    this.updateCartData();
  }

  increaseQuantity(increaseCart: CartModel) {
    this.cartProducts = this.cartProducts.map(
      cart => cart !== increaseCart ? cart : {...cart, count: cart.count + 1}
      ).filter( ({count}) => count > 0);
    this.updateCartData();
  }

  decreaseQuantity(decreaseCart: CartModel ) {
    this.cartProducts = this.cartProducts.map(
      cart => cart !== decreaseCart ? cart : {...cart, count: cart.count - 1}
      ).filter( ({count}) => count > 0);
    this.updateCartData();
  }

  removeAllProducts() {
    this.cartProducts = [];
    this.updateCartData();
  }
  updateCartData() {
    const total = this.cartProducts.map(({count}: CartModel) => count).reduce( (acc, price) => acc + price, 0);
    const totalSum = this.cartProducts.map(({product: {price}, count}: CartModel) => price * count).reduce( (acc, price) => acc + price, 0);
    this.channel.next(new CartsInfoModel(this.cartProducts, total, totalSum));
  }

}
