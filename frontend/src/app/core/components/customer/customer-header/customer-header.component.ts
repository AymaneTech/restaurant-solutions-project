import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-customer-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './customer-header.component.html',
})
export class CustomerHeaderComponent {
  showOrderPanel = false;

  toggleOrderPanel(): void {
    this.showOrderPanel = !this.showOrderPanel;
  }
}
