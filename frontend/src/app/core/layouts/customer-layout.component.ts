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
    <div class="min-h-screen flex flex-col">
      <app-customer-header class="fixed top-0 w-full z-50"></app-customer-header>

      <main class="flex-grow mt-16 pb-4">
        <router-outlet></router-outlet>
      </main>

      <app-customer-footer></app-customer-footer>
    </div>
  `
})
export class CustomerLayoutComponent {

}
