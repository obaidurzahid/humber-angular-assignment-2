import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() cartItem!: Product;
  
  cartItems:Product[]=[];
  constructor(private service: ProductsService) { 
   
  }
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    this.cartItems = this.service.getCartItems();
  }
  
  onClear(){
    this.service.clearCart();
    this.getCartItems();
    console.log(this.cartItems.length);
  }
}
