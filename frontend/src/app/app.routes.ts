import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './core/layouts/admin-layout.component';
import {CustomerLayoutComponent} from './core/layouts/customer-layout.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'categories',
        loadComponent: () =>
          import(
            './features/admin/categories/pages/categories-list/categories-list.component'
            ).then((c) => c.CategoriesListComponent),
      },
    ],
  },
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/customer/hero/hero.component')
            .then(c => c.HeroComponent)
      }
    ]
  }
];
