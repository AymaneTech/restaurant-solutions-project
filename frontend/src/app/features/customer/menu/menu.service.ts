import {Injectable} from '@angular/core';
import {MenuCategory} from './menu.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly menuCategories: MenuCategory[] = [
    {
      id: 1,
      name: 'pizza',
      recipes: [
        {
          id: 1,
          name: 'Margherita',
          description: 'Tomato, mozzarella, basil',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 10
        },
        {
          id: 2,
          name: 'Pepperoni',
          description: 'Tomato, mozzarella, pepperoni',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 12
        }
      ]
    },
    {
      id: 2,
      name: 'pasta',
      recipes: [
        {
          id: 3,
          name: 'Carbonara',
          description: 'Pasta, egg, guanciale, pepper, pecorino',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 15
        },
        {
          id: 4,
          name: 'Amatriciana',
          description: 'Pasta, tomato, guanciale, pepper, pecorino',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 14
        }
      ]
    },
    {
      id: 3,
      name: 'dessert',
      recipes: [
        {
          id: 5,
          name: 'Tiramisu',
          description: 'Coffee, mascarpone, cocoa, savoiardi',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 8
        },
        {
          id: 6,
          name: 'Panna Cotta',
          description: 'Cream, sugar, gelatin, vanilla',
          image: 'https://imgs.search.brave.com/U-hWe4pS0aQTwhnc9IZj3bnodKjHRy6PuLzaZoGRq3E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ',
          price: 7
        }
      ]
    }
  ];

  getMenuCategories(): Observable<MenuCategory[]> {
    return of(this.menuCategories);
  }
}
