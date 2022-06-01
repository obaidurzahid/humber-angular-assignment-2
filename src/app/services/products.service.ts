import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  cartItems : Product[] = [];

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    // http call to retrieve list of products
    return this.http.get('/assets/product-data.json');
  };

  getOrderData():Observable<any> {
    // http call to retrieve list of orders
    return this.http.get('/assets/order-data.json') as Observable<any>;
  }
  addCartItem(product:Product){
    this.cartItems.push(product);
    
  }
  getCartItems(){
    return this.cartItems;
    
  }
  clearCart() {
    this.cartItems = [];
  }
}
