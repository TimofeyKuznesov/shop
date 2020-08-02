import { Component, OnInit, Input } from '@angular/core';

import { ProductsServiceService } from '../../services/products-service.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
  constructor() { }

  @Input() product: ProductModel;

  ngOnInit() {
  }
}
