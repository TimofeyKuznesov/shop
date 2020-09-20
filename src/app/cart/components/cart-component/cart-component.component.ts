import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Categories } from 'src/app/first-component/categories.enum';

import {CartModel} from '../../models';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponentComponent implements OnInit {

  @Input() cart: CartModel;
  @Output() increaseQuantity: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() decreaseQuantity: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() removeProduct: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  categories = Categories;

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseQuantity(cart: CartModel) {
    this.increaseQuantity.emit(cart);
  }

  onDecreaseQuantity(cart: CartModel) {
    this.decreaseQuantity.emit(cart);
  }

  onRemoveProduct(cart: CartModel) {
    this.removeProduct.emit(cart);
  }

}
