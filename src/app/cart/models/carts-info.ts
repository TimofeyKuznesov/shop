import { CartModel } from './cart-model';

export class CartsInfoModel {
    total = 0;
    totalSum = 0;
    carts: Array<CartModel> = [];
    constructor(carts: Array<CartModel>) {
        this.carts = carts;
        this.total = carts.map(({count}: CartModel) => count).reduce( (acc, price) => acc + price, 0);
        this.totalSum = carts.map(({product: {price}, count}: CartModel) => price * count).reduce( (acc, price) => acc + price, 0);
    }
}
