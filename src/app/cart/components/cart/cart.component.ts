import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Categories } from 'src/app/first-component/categories.enum';

import {CartModel} from '../../models';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  @Input() cart: CartModel;
  @Output() increaseQuantity: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() decreaseQuantity: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output() removeProduct: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  categories = Categories;

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseQuantity() {
    this.increaseQuantity.emit(this.cart);
  }

  onDecreaseQuantity() {
    this.decreaseQuantity.emit(this.cart);
  }

  onRemoveProduct() {
    this.removeProduct.emit(this.cart);
  }

}
