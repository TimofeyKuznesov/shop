import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { EffectDirective } from './directives/effect.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, EffectDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, EffectDirective, OrderByPipe]
})
export class SharedModule {

 }
