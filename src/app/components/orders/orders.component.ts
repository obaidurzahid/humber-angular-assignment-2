import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderData } from 'src/app/models/order.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList:Order[]=[];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProductsData();
  }
  getProductsData(){
    this.service.getOrderData().pipe(filter(res=>res !== null || res !== undefined)).subscribe((result:any)=>{
      this.orderList=result.map((data: OrderData)=>new Order(data));
    });
  };
}
