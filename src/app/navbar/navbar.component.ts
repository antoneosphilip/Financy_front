import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Indicates it's a standalone component
  imports: [CommonModule, RouterModule], // Import CommonModule for *ngIf and other directives
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userRole: string | null = null;

  constructor() {
    // Retrieve the user role from localStorage
    this.userRole = localStorage.getItem('userRole');
  }
}
