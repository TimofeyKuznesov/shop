import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from 'src/app/products/models';

import {CartModel} from '../../models';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponentComponent implements OnInit {

  @Input() cart: CartModel;
  @Output() removeCart: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onRemoveCart(cart: CartModel) {
    this.removeCart.emit(cart);
  }

  onAddProduct(product: ProductModel) {
    this.addProduct.emit(product);
  }

  onRemoveProduct(product: ProductModel) {
    this.removeProduct.emit(product);
  }

}
