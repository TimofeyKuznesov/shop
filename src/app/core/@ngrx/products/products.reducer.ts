import { Action, createReducer, on } from '@ngrx/store';

import { initialProductState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export const reducer = createReducer(
  initialProductState,
  on(ProductsActions.loadProducts, (state: ProductsState) => ({
    ...state,
    loading: true
  })),
  on(ProductsActions.loadProductsSuccess, (state: ProductsState, {products}) => ({
    ...state,
    products,
    loading: false,
    loaded: true
  }))
);

export const productsReducer = (state: ProductsState | undefined, action: Action) => {
  return reducer(state, action);
};
