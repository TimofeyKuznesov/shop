import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { EffectDirective } from './directives/effect.directive';

@NgModule({
  declarations: [HighlightDirective, EffectDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, EffectDirective]
})
export class SharedModule {

 }
