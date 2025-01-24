import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // Utiliser CommonModule ici
import { Recipe } from '../../menu.model';


@Component({
  selector: 'app-item-details',
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  standalone: true,
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnChanges {
  @Input() recipe!: Recipe;

  ngOnChanges() {
    console.log('Recipe received in ItemDetailsComponent:', this.recipe);
  }
}
