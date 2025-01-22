import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { AdminFooterComponent } from '../../components/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminHeaderComponent, AdminFooterComponent],
  template: `
    <app-admin-header></app-admin-header>
    <main class="">
      <router-outlet></router-outlet>
    </main>
    <app-admin-footer></app-admin-footer>
  `,
})
export class AdminLayoutComponent {}
