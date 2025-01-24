import {Component, Input} from '@angular/core';
import {OrderItem} from '../../../menu/menu.model';
import {Store} from '@ngrx/store';
import {removeOrderItem} from '../../../store/customer.actions';

@Component({
  selector: 'app-order-item',
  imports: [],
  templateUrl: './order-item.component.html',
  standalone: true,
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {

  @Input() item!: OrderItem;

  constructor(private readonly store: Store) {
  }

  removeItem(): void {
    this.store.dispatch(removeOrderItem({item: this.item}));
  }
}
