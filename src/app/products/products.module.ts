import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';



@NgModule({
  declarations: [ProductListComponentComponent, ProductComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponentComponent]
})
export class ProductsModule { }
