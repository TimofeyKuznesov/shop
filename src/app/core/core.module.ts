import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { appConfigFactory, APP_CONFIG_TOKEN, LocalStorageService } from './services';

import { CONSTANT_SERVICE, CONSTANT_TOKEN } from './services/constant.service';
import { GeneratorFactory, GENERATOR_TOKEN } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  providers: [
    {provide: CONSTANT_TOKEN, useValue: CONSTANT_SERVICE},
    {provide: GENERATOR_TOKEN, useFactory: GeneratorFactory(10), deps: [GeneratorService]},
    {provide: APP_CONFIG_TOKEN, useFactory: appConfigFactory, deps: [LocalStorageService]}
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
