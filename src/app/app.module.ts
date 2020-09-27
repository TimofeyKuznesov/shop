
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './layout/components/about.component';
import { CoreModule } from './core/core.module';
import { PathNotFoundComponent } from './layout/path-not-found/path-not-found.component';
import { AdminModule } from './admin/admin.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    CartModule,
    ProductsModule,
    CoreModule,
    SharedModule,
    // MUST BE LAST
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
