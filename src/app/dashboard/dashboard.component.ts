import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../models/IProduct';
import { ProductData } from '../dummy-data/product-data';
import { SharedResourcesService } from '../shared-resources/shared-resources.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products!: Product[];

  constructor(private router : Router,
    @Inject(LOCAL_STORAGE) private localStorage : StorageService){}

  ngOnInit(): void {
    this.products = <Product[]>ProductData.loadProducts();
  }

  showItemInfo(product : Product) : void{
    this.localStorage.set('Product', JSON.stringify(product));
    this.router.navigate(['/item-info']);
  }
}


