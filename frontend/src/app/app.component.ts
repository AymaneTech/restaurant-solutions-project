import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MenuItemComponent } from './features/customer/menu/components/menu-item/menu-item.component';
import { ItemDetailsComponent } from './features/customer/menu/components/item-details/item-details.component';

@Component({
  selector: 'app-root',
  imports: [ MenuItemComponent, ItemDetailsComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}

