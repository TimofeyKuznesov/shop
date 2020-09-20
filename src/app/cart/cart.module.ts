import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CartListComponentComponent } from './components/cart-list-component/cart-list-component.component';

@NgModule({
  declarations: [CartComponentComponent, CartListComponentComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ],
  exports: [CartListComponentComponent]
})
export class CartModule { }
