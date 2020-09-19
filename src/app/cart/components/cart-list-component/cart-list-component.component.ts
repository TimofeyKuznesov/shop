import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ProductModel } from 'src/app/products/models';

import { CartServiceService } from '../../services';
import { CartModel } from '../../models';
import { CartsInfoModel } from '../../models/carts-info';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponentComponent implements OnInit, OnDestroy {

  cartsInfo: CartsInfoModel = new CartsInfoModel([]);
  private cartSub: Subscription;

  constructor(private cartServiceService: CartServiceService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cartSub = this.cartServiceService.channel$.subscribe(cartsInfo => this.updateCartsInfo(cartsInfo));
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  updateCartsInfo(cartsInfo: CartsInfoModel){
    this.cartsInfo = cartsInfo;
    this.changeDetectorRef.detectChanges();
  }

  onRemoveCart(removeCart: CartModel) {
    this.cartServiceService.removeCart(removeCart);
  }

  onAddProduct(addProduct: ProductModel) {
    this.cartServiceService.addProduct(addProduct);
  }
  onRemoveProduct(removeProduct: ProductModel) {
    this.cartServiceService.removeProduct(removeProduct);
  }
}
