import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {Recipe} from '../../menu.model';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {Store} from '@ngrx/store';
import {addRecipeToOrders} from '../../../store/customer.actions';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule, ItemDetailsComponent],
  templateUrl: './menu-item.component.html',

  standalone: true
})
export class MenuItemComponent {
  @Input() recipe!: Recipe;
  showPopup = false;

  constructor(private readonly store: Store) {
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  addToOrder() {
    console.log('here')
    this.store.dispatch(addRecipeToOrders(this.recipe));
  }
}
