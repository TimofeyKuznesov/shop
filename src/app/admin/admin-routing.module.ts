import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards';
import { OrderListComponent } from '../orders/components';
import { ProductListComponent } from '../products/components';

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
      path: 'products',
      component: ProductListComponent,
    },
    {
      path: 'orders',
      component: OrderListComponent,
    },
    {
      path: 'product/edit/:productID',
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
