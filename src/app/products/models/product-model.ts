import { Categories } from './categories.enum';

export class ProductModel {
    constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: Categories,
    public isAvailable: boolean,
    ) {}
}
