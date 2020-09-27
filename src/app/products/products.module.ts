import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductComponent, ProductListComponent } from './components';

import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
