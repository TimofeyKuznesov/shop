import { Injectable, OnInit } from '@angular/core';
import { CartModel } from '../models';
import { ProductsServiceService } from '../../products/services';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private productsServiceService: ProductsServiceService) { }

  // обычно ассортимент магазина и покупки - это разные списки товаров
  getCarts() {
    return this.productsServiceService.getProducts().map(
      product => new CartModel(product)
    );
  }

}
