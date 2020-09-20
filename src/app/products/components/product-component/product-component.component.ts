import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { Categories } from 'src/app/first-component/categories.enum';

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

  categories = Categories;

  ngOnInit() {
  }

  onAddProduct(product: ProductModel) {
    this.addProduct.emit(product);
  }
}
