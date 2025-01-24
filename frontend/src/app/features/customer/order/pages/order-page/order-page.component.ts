import {Component} from '@angular/core';
import {OrderItem} from '../../../menu/menu.model';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {selectOrderedRecipes} from '../../../store/customer.selectors';
import {Observable} from 'rxjs';
import {OrderItemComponent} from '../../components/order-item/order-item.component';

@Component({
  selector: 'app-order-page',
  imports: [
    CommonModule,
    OrderItemComponent
  ],
  templateUrl: './order-page.component.html',
  standalone: true,
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  orderedItems$: Observable<OrderItem[]>;
  totalPrice = 0;

  constructor(private readonly store: Store) {
    this.orderedItems$ = this.store.select(selectOrderedRecipes);
    this.calculatePrice();
  }

  private calculatePrice() {
    this.orderedItems$.subscribe((items) => {
      this.totalPrice = items.reduce((total, item) => total + (item.quantity * item.recipe.price), 0);
    });
  }
}
