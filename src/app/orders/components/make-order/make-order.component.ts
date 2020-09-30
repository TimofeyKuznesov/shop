import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LocalStorageService } from 'src/app/core/services';

import { OrderModel } from '../../models/order';
import { OrdersService } from '../../services';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MakeOrderComponent implements OnInit, OnDestroy {

  sub: Subscription;
  constructor(
    private localStoreService: LocalStorageService,
    private ordersService: OrdersService,
    private router: Router,
    private location: Location,
    ) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  get order(): OrderModel {
    return this.localStoreService.getItem('order');
  }
  onMakeOrder() {
    this.sub = this.ordersService.addOrder(this.order).subscribe();
    this.localStoreService.removeItem('order');
  }
}
