import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { OrdersService } from '../../services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrdersService) { }

  ngOnInit(): void {
  }

}
