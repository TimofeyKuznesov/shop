import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CartListComponentComponent } from './components/cart-list-component/cart-list-component.component';

@NgModule({
  declarations: [CartComponentComponent, CartListComponentComponent],
  imports: [
    SharedModule,
    FormsModule,
  ],
  exports: [CartListComponentComponent]
})
export class CartModule { }
