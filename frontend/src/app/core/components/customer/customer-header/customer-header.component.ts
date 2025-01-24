import { Component } from '@angular/core';
import {OrderPageComponent} from '../../../../features/customer/order/pages/order-page/order-page.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-customer-header',
  imports: [
    OrderPageComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './customer-header.component.html',
})
export class CustomerHeaderComponent {
  showOrderPanel: boolean = false;

  toggleOrderPanel(): void {
    this.showOrderPanel = !this.showOrderPanel;
  }
}
