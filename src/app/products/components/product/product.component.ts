import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from 'src/app/core/services';

import { Categories } from 'src/app/first-component/categories.enum';

import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Input() category: Categories;
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor(public authService: AuthService){

  }
  ngOnInit() {
  }

  onAddProduct(product: ProductModel) {
    this.addProduct.emit(product);
  }
}
