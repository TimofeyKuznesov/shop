import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent, CartListComponent } from './components';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [
    SharedModule,
    FormsModule,
    CartRoutingModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
