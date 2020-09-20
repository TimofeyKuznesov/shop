import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstantsService, CONSTANT_TOKEN } from './services/constant.service';
import { GeneratorFactory, GENERATOR_TOKEN } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  providers: [
    {provide: ConstantsService, useValue: CONSTANT_TOKEN},
    {provide: GENERATOR_TOKEN, useFactory: GeneratorFactory(10), deps: [GeneratorService]}
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
