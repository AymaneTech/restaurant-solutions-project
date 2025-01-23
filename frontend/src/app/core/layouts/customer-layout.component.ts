import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CustomerHeaderComponent} from '../components/customer/customer-header/customer-header.component';
import {CustomerFooterComponent} from '../components/customer/customer-footer/customer-footer.component';

@Component({
  selector: 'app-customer-layout',
  imports: [
    RouterOutlet,
    CustomerHeaderComponent,
    CustomerFooterComponent
  ],
  standalone: true,
  template: `
    <div class="bg-amber-50">
      <app-customer-header class=""></app-customer-header>
      <router-outlet></router-outlet>
      <app-customer-footer class=""></app-customer-footer>
    </div>
  `
})
export class CustomerLayoutComponent {

}
