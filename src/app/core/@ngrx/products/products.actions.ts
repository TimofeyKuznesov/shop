import { createAction, props } from '@ngrx/store';

import { ProductModel } from 'src/app/products/models';

export const loadProducts = createAction(
  '[Products] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Array<ProductModel> }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

export const updateProduct = createAction(
  '[Products] Update Product',
  props<{ product: ProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Products] Update Product Success',
  props<{ oldProduct: ProductModel, newProduct: ProductModel }>()
);


export const updateProductFailure = createAction(
  '[Products] Update Product Failure',
  props<{ error: any }>()
);

