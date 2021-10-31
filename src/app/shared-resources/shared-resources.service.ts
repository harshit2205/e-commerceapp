import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct, Product } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class SharedResourcesService {

  public product! : Product;

  constructor() {
    // this is intentional..
   }
}
