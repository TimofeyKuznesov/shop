import {ProductModel} from '../../products/models';

export class CartModel {
    constructor(
        public product: ProductModel,
        public createDate: Date = new Date()
        // еще можно добавить количество
    ) {}
}
