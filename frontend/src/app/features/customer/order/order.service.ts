import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Recipe} from '../menu/menu.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderItems = new BehaviorSubject<Recipe[]>([]);
  public orderItems$ = this.orderItems.asObservable();

  addToOrder(item: Recipe) {
    const currentItems = this.orderItems.value;
    this.orderItems.next([...currentItems, item]);
  }

  removeFromOrder(index: number) {
    const currentItems = this.orderItems.value;
    currentItems.splice(index, 1);
    this.orderItems.next([...currentItems]);
  }

  getOrderTotal() {
    return this.orderItems.value.reduce((total, item) => total + item.price, 0);
  }
}
