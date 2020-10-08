import { ProductsState } from './products';
import { RouterStateUrl } from './router';

export interface AppState {
  products: ProductsState;
  router: RouterStateUrl;
}
