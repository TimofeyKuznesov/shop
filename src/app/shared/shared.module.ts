import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './directives/highlight.directive';
import { EffectDirective } from './directives/effect.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, EffectDirective, OrderByPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    EffectDirective,
    OrderByPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {

 }
