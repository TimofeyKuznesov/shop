import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { OrderModel } from '../../models/order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemComponent implements OnInit {

  @Input() order: OrderModel;
  constructor() { }

  ngOnInit(): void {
  }

}
