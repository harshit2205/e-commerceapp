import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../models/IProduct';
import { SharedResourcesService } from '../shared-resources/shared-resources.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-item-tab',
  templateUrl: './item-tab.component.html',
  styleUrls: ['./item-tab.component.css']
})
export class ItemTabComponent implements OnInit {
  product! : Product;

  constructor(private resources : SharedResourcesService,
    @Inject(LOCAL_STORAGE) private localStorage: StorageService){}
  
  ngOnInit(): void {
    var log = this.localStorage.get('Product');
    console.log(log);
    this.product = JSON.parse(log);
    console.log(this.product.pro_name);
  }

}
