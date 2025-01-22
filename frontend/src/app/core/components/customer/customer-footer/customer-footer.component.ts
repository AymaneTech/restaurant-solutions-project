import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-footer',
  imports: [],
  standalone: true,
  templateUrl: './customer-footer.component.html',
})
export class CustomerFooterComponent {
  currentYear: number = new Date().getFullYear();
}
