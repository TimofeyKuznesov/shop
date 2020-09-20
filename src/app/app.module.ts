
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponentComponent } from './products/components/product-component/product-component.component';
import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { CartListComponentComponent } from './cart/components/cart-list-component/cart-list-component.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './layout/components/about.component';
import { CoreModule } from './core/core.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
