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
      <app-admin-header class="bg-amber-50 text-white shadow-md"></app-admin-header>
      <div class="flex flex-grow">
        <app-admin-sidebar class="bg-amber-50 w-64 shadow-md"></app-admin-sidebar>

        <main class="flex-grow bg-amber-50 p-16">
          <router-outlet></router-outlet>
        </main>
      </div>

      <app-admin-footer class="bg-amber-600 text-white shadow-md"></app-admin-footer>
    </div>
  `,
})
export class AdminLayoutComponent {}
