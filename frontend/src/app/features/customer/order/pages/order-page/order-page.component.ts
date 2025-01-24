import {Component} from '@angular/core';
import {OrderItemComponent} from '../../components/order-item/order-item.component';
import {Recipe} from '../../../menu/menu.model';
import {OrderService} from '../../order.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-order-page',
  imports: [
    OrderItemComponent,
    NgForOf
  ],
  templateUrl: './order-page.component.html',
  standalone: true,
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  orderItems: Recipe[] = [];
  totalPrice = 0;

  constructor(private orderService: OrderService) {
    this.orderService.orderItems$.subscribe((items) => {
      this.orderItems = items;
      this.totalPrice = this.orderService.getOrderTotal();
    });
  }

  removeItem(index: number) {
    this.orderService.removeFromOrder(index);
  }

}
