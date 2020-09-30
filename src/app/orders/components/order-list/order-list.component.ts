import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderModel } from '../../models';

import { OrdersService } from '../../services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Array<OrderModel>>;

  constructor(public orderService: OrdersService) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getAllOrders();
  }

}
