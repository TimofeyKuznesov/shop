import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductModel } from 'src/app/products/models';

import { selectRouterState } from '../router';

import { AppState } from './../app.state';
import { ProductsState } from './products.state';

export const selectProductsState = createFeatureSelector<AppState, ProductsState>('products');
export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.products);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const selectProductByUrl = createSelector(
    selectProductsData,
    selectRouterState,
    (products, router): ProductModel => {
        const productID = router.state.params.productID;
        if (productID && Array.isArray(products)) {
            return products.find(product => product.id === +productID);
        } else {
            return null;
        }
});
