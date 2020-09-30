import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartsInfoModel } from 'src/app/cart/models';
import { BackendService } from 'src/app/core/services';

import { OrderModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private backendService: BackendService) { }

  getAllOrders() {
    return this.backendService.getOrders();
  }
  addOrder(order: OrderModel){
    return this.backendService.addOrder(order);
  }
}
