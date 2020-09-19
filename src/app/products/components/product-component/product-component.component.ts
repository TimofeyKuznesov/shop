import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponentComponent implements OnInit {
  constructor() { }

  @Input() product: ProductModel;
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  ngOnInit() {
  }

  onAddProduct(product: ProductModel) {
    this.addProduct.emit(product);
  }
}
