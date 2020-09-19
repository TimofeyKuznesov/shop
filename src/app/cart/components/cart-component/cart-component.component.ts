import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onRemoveCart(cart: CartModel) {
    this.removeCart.emit(cart);
  }

}
