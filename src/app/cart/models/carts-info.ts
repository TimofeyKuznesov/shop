import { CartModel } from './cart-model';

export class CartsInfoModel {
    total = 0;
    totalSum = 0;
    carts: Array<CartModel> = [];
    constructor(carts: Array<CartModel>) {
        this.carts = carts;
        this.total = carts.length;
        this.totalSum = carts.map(({product: {price}}: CartModel) => price).reduce( (acc, price) => acc + price, 0);
    }
}
