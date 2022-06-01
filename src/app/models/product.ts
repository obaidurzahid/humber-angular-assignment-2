import { ProductData } from "./product.interface";

export class Product{
    name: string;
    price: string;
    image: string;

    constructor(data:ProductData){
        this.name=data.name;
        this.price=data.price;
        this.image=data.image;
    }
}