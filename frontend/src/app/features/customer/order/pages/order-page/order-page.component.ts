import { Component } from '@angular/core';
import {OrderItemComponent} from '../../components/order-item/order-item.component';

@Component({
  selector: 'app-order-page',
  imports: [
    OrderItemComponent
  ],
  templateUrl: './order-page.component.html',
  standalone: true,
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {

}
