import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/layouts/admin-layout.component';
import { CustomerLayoutComponent } from './core/layouts/customer-layout.component';

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
          import('./features/customer/home/home.component').then(
            (c) => c.HomeComponent,
          ),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import(
            './features/customer/menu/pages/menu-page/menu-page.component'
          ).then((c) => c.MenuPageComponent),
      },
      {
        path: 'item-details',
        loadComponent: () =>
          import(
            './features/customer/menu/components/item-details/item-details.component'
          ).then((c) => c.ItemDetailsComponent),
      },
    ],
  },
];
