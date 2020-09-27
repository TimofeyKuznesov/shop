import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AboutComponent, LoginComponent, PathNotFoundComponent } from './components';

@NgModule({
  declarations: [LoginComponent, PathNotFoundComponent, AboutComponent],
  imports: [
    SharedModule
  ],
  exports: [
    PathNotFoundComponent,
    AboutComponent
  ]
})
export class LayoutModule { }
