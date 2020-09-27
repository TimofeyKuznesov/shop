import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './layout/components/about.component';
import { PathNotFoundComponent } from './layout/path-not-found/path-not-found.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
