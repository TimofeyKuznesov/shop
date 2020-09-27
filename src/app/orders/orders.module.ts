import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { OrderItemComponent, OrderListComponent } from './components';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderListComponent, OrderItemComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
