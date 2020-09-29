import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeOrderComponent } from './components';

const routes: Routes = [{
  path: 'order',
  component: MakeOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
