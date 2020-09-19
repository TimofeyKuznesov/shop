import {ProductModel} from '../../products/models';

export class CartModel {
    constructor(
        public product: ProductModel,
        public count: number = 1,
        public createDate: Date = new Date()
    ) {}
}
