import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-menu-item',
  imports: [CommonModule,RouterLink,ItemDetailsComponent],
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('popupAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.8)' }), // L'élément commence plus petit et transparent
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })), // Animation pour afficher l'élément
      ]),
      transition('* => void', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' })), // Animation pour fermer l'élément
      ]),
    ]),
  ],
})
export class MenuItemComponent {
  showPopup = false; 

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
