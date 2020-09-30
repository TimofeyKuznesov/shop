import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

import {OrdersService} from 'src/app/orders/services';

import { ProductModel } from 'src/app/products/models';
import { LocalStorageService } from 'src/app/core/services';

import { OrderModel } from 'src/app/orders/models';

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

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private ordersService: OrdersService
    ) { }

  ngOnInit() {
    this.cartSub = this.cartService.channel$.subscribe(cartsInfo => this.updateCartsInfo(cartsInfo));
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  updateCartsInfo(cartsInfo: CartsInfoModel){
    this.cartsInfo = cartsInfo;
    this.changeDetectorRef.detectChanges();
    console.log(cartsInfo);
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

  onRemoveAllProducts() {
    this.cartService.removeAllProducts();
  }

  onMakeOrder() {
    const order = new OrderModel(this.cartsInfo);
    this.localStorageService.setItem('order', order);
    this.ordersService.addOrder(order);
    this.cartService.removeAllProducts();
    this.router.navigateByUrl('/order');
  }
}
