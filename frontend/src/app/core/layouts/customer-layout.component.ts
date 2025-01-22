import {Component} from '@angular/core';
import {AdminFooterComponent} from '../components/admin/admin-footer/admin-footer.component';
import {AdminHeaderComponent} from '../components/admin/admin-header/admin-header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  imports: [
    AdminFooterComponent,
    AdminHeaderComponent,
    RouterOutlet
  ],
  standalone: true,
  template: `
    <app-admin-header></app-admin-header>
    <main class="">
      <router-outlet></router-outlet>
    </main>
    <app-admin-footer></app-admin-footer>
  `
})
export class CustomerLayoutComponent {

}
