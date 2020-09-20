import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CONSTANT_SERVICE, CONSTANT_TOKEN } from './services/constant.service';
import { GeneratorFactory, GENERATOR_TOKEN } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  providers: [
    {provide: CONSTANT_TOKEN, useValue: CONSTANT_SERVICE},
    {provide: GENERATOR_TOKEN, useFactory: GeneratorFactory(10), deps: [GeneratorService]}
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
