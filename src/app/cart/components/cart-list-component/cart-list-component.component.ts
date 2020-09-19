import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { CartServiceService } from '../../services';
import { CartModel } from '../../models';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponentComponent implements OnInit, OnDestroy {

  carts: Array<CartModel> = [];
  private cartSub: Subscription;

  constructor(private cartServiceService: CartServiceService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartSub = this.cartServiceService.channel$.subscribe(carts => this.updateCarts(carts));
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  updateCarts(carts: Array<CartModel>){
    this.carts = carts;
    this.changeDetectorRef.detectChanges();
  }

  get totalSum() {
    return this.carts.map(({product: {price}}: CartModel) => price).reduce( (acc, price) => acc + price, 0);
  }
}
