import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, Input } from '@angular/core';
import { Recipe } from '../../menu.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import {OrderService} from '../../../order/order.service';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule, ItemDetailsComponent],
  // import { Recipe } from './../../menu.model';
  templateUrl: './menu-item.component.html',

  standalone: true
})
export class MenuItemComponent {
  @Input() recipe!: Recipe;
  showPopup = false;

  constructor(private orderService: OrderService ) {}

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  addToOrder() {
    this.orderService.addToOrder(this.recipe);
    // alert(`${this.recipe.name} added to your order!`);
  }

}
