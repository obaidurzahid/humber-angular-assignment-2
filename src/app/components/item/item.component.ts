import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product!: { name: string; price: string; image: string; };
  
  constructor(private service:ProductsService) {
   }

  ngOnInit(): void {
    
  }
  addToCart(product:Product){
    this.service.addCartItem(product);
  }

}
