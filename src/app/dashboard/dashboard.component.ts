import { Component, OnInit } from '@angular/core';
import { Product } from '../models/IProduct';
import { ProductData } from '../dummy-data/product-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products!: Product[];

  ngOnInit(): void {
    this.products = <Product[]>ProductData.loadProducts();
    for(let pro of this.products){
      console.log("Hello" + pro.toString());
    }

    console.log("on init called");
  }
  stars : number = 8;
}


