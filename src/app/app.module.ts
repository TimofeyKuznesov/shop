
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { LayoutModule } from './layout/layout.module';
import { TimingInterceptor } from './core/interceptors';
import { RootStoreModule } from './core/@ngrx/root-store.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    // AdminModule,
    HttpClientModule,
    RootStoreModule,
    // MUST BE LAST
    AppRoutingModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
