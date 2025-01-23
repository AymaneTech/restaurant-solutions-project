import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../components/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../components/admin/admin-footer/admin-footer.component';
import {AdminSidebarComponent} from '../components/admin/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent],
  standalone: true,
  template: `
    <div class="min-h-screen flex flex-col">
      <app-admin-header></app-admin-header>
      <div class="flex flex-grow">
        <app-admin-sidebar></app-admin-sidebar>
        <main class="flex-grow">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-admin-footer></app-admin-footer>
    </div>
  `,
})
export class AdminLayoutComponent {}
