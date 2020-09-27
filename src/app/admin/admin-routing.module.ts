import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards';

import { AdminComponent, ProductEditComponent } from './components';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'product/add',
      component: ProductEditComponent,
    },
    {
      path: 'product/edit/:itemID',
      component: ProductEditComponent,
      resolve: {
        product: ProductResolveGuard
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
