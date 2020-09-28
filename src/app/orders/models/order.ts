import { CartModel, CartsInfoModel } from 'src/app/cart/models';

export class OrderModel {
    id: number;
    createDate: Date;
    carts: Array<CartModel>;
    sum: number;
    quantity: number;

    constructor(cartsInfo: CartsInfoModel) {
        this.createDate = new Date();
        this.carts = cartsInfo.carts;
        this.sum = cartsInfo.totalSum;
        this.quantity = cartsInfo.total;
    }
}
