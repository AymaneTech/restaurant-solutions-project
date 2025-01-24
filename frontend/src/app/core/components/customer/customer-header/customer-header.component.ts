import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderPageComponent} from '../../../../features/customer/order/pages/order-page/order-page.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-customer-header',
  imports: [CommonModule, OrderPageComponent, RouterLink],
  standalone: true,
  templateUrl: './customer-header.component.html',
})
export class CustomerHeaderComponent {
  showOrderPanel = false;

  toggleOrderPanel(): void {
    this.showOrderPanel = !this.showOrderPanel;
  }
}
