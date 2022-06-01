import { OrderData } from "./order.interface";

export class Order{
    orderNumber: string;
    total: string;

    constructor(data:OrderData){
        this.orderNumber=data.orderNumber;
        this.total=data.total;

    }
}