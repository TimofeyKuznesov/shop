import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService, CONSTANT_TOKEN } from './services/constant.service';

@NgModule({
  declarations: [],
  providers: [
    {provide: ConstantsService, useValue: CONSTANT_TOKEN}
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
