import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, of, pipe, Observer, filter } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/models/product.interface';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:Product[]=[];

  title:string="This is title";
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProductsData();
  }
  
  getProductsData(){
    this.service.getProducts().pipe(filter(res=>res !== null || res !== undefined)).subscribe((result:any)=>{
      this.productList=result.map((data: ProductData)=>new Product(data));
    });
  };
  
}
