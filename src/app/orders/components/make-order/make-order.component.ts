import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services';

import { OrderModel } from '../../models/order';
import { OrdersService } from '../../services';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MakeOrderComponent implements OnInit {

  constructor(private localStoreService: LocalStorageService, private ordersService: OrdersService) { }

  ngOnInit(): void {
  }
  get order(): OrderModel {
    return this.localStoreService.getItem('order');
  }
  onMakeOrder() {
    this.ordersService.addOrder(this.order);
    this.localStoreService.removeItem('order');
  }
}
