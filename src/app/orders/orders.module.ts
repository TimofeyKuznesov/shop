import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { OrderItemComponent, OrderListComponent } from './components';
import { OrdersRoutingModule } from './orders-routing.module';
import { MakeOrderComponent } from './components/make-order/make-order.component';

@NgModule({
  declarations: [OrderListComponent, OrderItemComponent, MakeOrderComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
