import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartsInfoModel } from 'src/app/cart/models';

import { OrderModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orderList: Array<OrderModel> = [];
  private orders = new BehaviorSubject<Array<OrderModel>>(this.orderList);
  orders$ = this.orders.asObservable();

  constructor() { }
  addOrder(order: OrderModel){
    this.orderList = [...this.orderList, order];
    this.orders.next(this.orderList);
  }
}
