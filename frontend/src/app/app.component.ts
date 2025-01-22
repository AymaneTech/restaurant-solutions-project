import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importer le module d'animations
import { BrowserModule } from '@angular/platform-browser'; // Garder BrowserModule ici
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
