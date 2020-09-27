import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ProductModel } from 'src/app/products/models';

import { CartService } from '../../services';
import { CartModel } from '../../models';
import { CartsInfoModel } from '../../models/carts-info.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit, OnDestroy {

  cartsInfo: CartsInfoModel = new CartsInfoModel([]);
  filter = 'count';
  private cartSub: Subscription;

  constructor(private cartService: CartService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartSub = this.cartService.channel$.subscribe(cartsInfo => this.updateCartsInfo(cartsInfo));
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  updateCartsInfo(cartsInfo: CartsInfoModel){
    this.cartsInfo = cartsInfo;
    this.changeDetectorRef.detectChanges();
  }

  onAddProduct(addProduct: ProductModel) {
    this.cartService.addProduct(addProduct);
  }
  onRemoveProduct(removeProduct: CartModel) {
    this.cartService.removeProduct(removeProduct);
  }

  onIncreaseQuantity(cart: CartModel) {
    this.cartService.increaseQuantity(cart);
  }
  onDecreaseQuantity(cart: CartModel) {
    this.cartService.decreaseQuantity(cart);
  }

  onRemoveAllProducts(cart: CartModel) {
    this.cartService.removeAllProducts();
  }
}
