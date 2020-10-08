import { ProductModel } from 'src/app/products/models';

export interface ProductsState {
    products: ReadonlyArray<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
  }

export const initialProductState: ProductsState = {
    products: [ ],
    loading: false,
    loaded: false,
    error: null
};
