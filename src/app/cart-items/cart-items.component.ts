import { Component, OnInit } from '@angular/core';
import { DummyCart } from '../dummy-data/dummy-cart';
import { Product } from '../models/IProduct';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems! : Product[];

  constructor() { 
    // necessary initialisation..
  }

  ngOnInit(): void {
    this.cartItems = <Product[]>DummyCart.data;
  }

}
