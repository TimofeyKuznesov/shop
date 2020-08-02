import { Component, OnInit } from '@angular/core';

import { CartServiceService } from '../../services';
import { CartModel } from '../../models';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss']
})
export class CartListComponentComponent implements OnInit {
  carts: Array<CartModel>;
  constructor(private cartServiceService: CartServiceService) { }

  ngOnInit() {
    this.carts = this.cartServiceService.getCarts();
  }
}
