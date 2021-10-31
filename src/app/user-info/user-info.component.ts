import { Component, Inject, OnInit } from '@angular/core';
import { RecentProduct } from '../dummy-data/recent-product';
import { Product } from '../models/IProduct';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  recentProducts! : Product[];

  constructor(private router : Router,
    @Inject(LOCAL_STORAGE) private localStorage : StorageService) { 
    // necessary initialization..
  }

  ngOnInit(): void {
    this.recentProducts = <Product[]>RecentProduct.data;
  }

  showItemInfo(product : Product) : void{
    this.localStorage.set('Product', JSON.stringify(product));
    this.router.navigate(['/item-info']);
  }

}
