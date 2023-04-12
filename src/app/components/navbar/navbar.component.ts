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
    {
      title: 'Projets',
      path: '/projects',
      subMenu: [
        { title: 'Digitrack', path: '/projects/digitrack' },
        { title: 'Meet in City', path: '/projects/meet-in-city' },
        { title: 'Déploiement automatisé de edge server', path: '/projects/edge-server' },
        { title: 'Génération de musique par IA\n', path: '/projects/music-ai' },
        { title: 'Suivi à distance d\'un parc de server', path: '/projects/monitoring' },
        // ... ajoutez plus de projets ici
      ]
    },
    {
      title: 'Compétences',
      path: '/skills',
      subMenu: [
        { title: 'Construire une application', path: '/skills/build-app' },
        { title: 'Fournir une interface de programmation', path: '/skills/build-api' },
        { title: 'Collecter, Analyser et traiter des données', path: '/skills/data' },
        { title: 'Automatisation Intelligente', path: '/skills/automation' },
        { title: 'Gestion de serveur et parc Unix', path: '/skills/server-management' },
        { title: 'Autonomie', path: '/skills/autonomy' },
        { title: 'Anglais', path: '/skills/english' },
        { title: 'Veille technologique', path: '/skills/tech-watch' },
        { title: 'Méthode Agile', path: '/skills/agile' },
        // ... ajoutez plus de compétences ici
      ]
    },
    { title: 'Parcours', path: '/timeline' },
    { title: 'Contact', path: '/contact' }
  ];

  isMobileMenuOpen = false;

  constructor(private router: Router) {}

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
  subMenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
}
