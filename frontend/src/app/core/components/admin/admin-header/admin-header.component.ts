import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './admin-header.component.html',
})
export class AdminHeaderComponent {}
