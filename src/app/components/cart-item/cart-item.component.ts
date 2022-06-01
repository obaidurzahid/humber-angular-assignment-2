import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() catrItem!: Product;
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
