// navbar-test.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-test',
  templateUrl: './navbar-test.component.html',
  styleUrls: ['./navbar-test.component.css']
})
export class NavbarTestComponent {
  isNavbarCollapsed = false;
  active = 1;  // ID do item ativo

  navbarTogglerClick(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
