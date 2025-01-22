import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'categories',
        loadComponent: () =>
          import(
            './features/categories/pages/categories-list/categories-list.component'
          ).then((c) => c.CategoriesListComponent),
      },
    ],
  },
];
