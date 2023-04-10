import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menuItems: MenuItem[] = [
    { title: 'A propos', path: '/about-me' },
    { title: 'Projets', path: '/projects' },
    { title: 'Compétences', path: '/skills' },
    { title: 'Parcours', path: '/timeline' },
    { title: 'Contact', path: '/contact' }
  ];

  isMobileMenuOpen = false;

  constructor(
    private router: Router) {
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  redirectTo(path: string) {
    this.router.navigate([path]).then();
  }
}

interface MenuItem {
  title: string;
  path: string;
}
