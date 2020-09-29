import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services';

import { OrderModel } from '../../models/order';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MakeOrderComponent implements OnInit {

  constructor(private localStoreService: LocalStorageService) { }

  ngOnInit(): void {
  }
  get order(): OrderModel {
    return this.localStoreService.getItem('order');
  }
}
