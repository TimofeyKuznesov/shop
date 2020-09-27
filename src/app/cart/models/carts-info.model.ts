import { CartModel } from './cart.model';

export class CartsInfoModel {
    constructor(public carts: Array<CartModel>, public total: number = 0, public totalSum = 0) {
    }
}
