import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from 'src/app/products/models';

import { ProductsService } from 'src/app/products/services';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: ProductModel;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const productID = params.get('productID');
          return productID ? this.productService.getProduct(productID) : of({} as ProductModel);
        }))
      .subscribe(product => this.product = product );
  }

  onSaveProduct() {

  }
}
