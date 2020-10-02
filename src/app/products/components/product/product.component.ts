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
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  categories = Categories;
  //  ок, но я бы попробовал тут избавиться от зависимости и получить эту информацию от родительского компонента
  constructor(public authService: AuthService){

  }
  ngOnInit() {
  }

  onAddProduct(product: ProductModel) {
    this.addProduct.emit(product);
  }
}
