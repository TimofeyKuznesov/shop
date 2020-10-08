import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

import { environment } from './../../../environments/environment';

import { routerReducers, CustomSerializer, RouterEffects } from './router';

import { ProductsStoreModule } from './products/products-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true,      // default value is true
        strictActionImmutability: true,     // default value is true
        strictStateSerializability: true,   // default value is false
        strictActionSerializability: true,  // default value is false
        strictActionWithinNgZone: true,     // default value is false
        strictActionTypeUniqueness: true    // default value is false
      },
}),
  EffectsModule.forRoot([RouterEffects]),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
    routerState: RouterState.Minimal,
    serializer: CustomSerializer
  }),
  ProductsStoreModule,
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class RootStoreModule { }
