import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      id: 'digitrack',
      title: 'Digitrack',
      description: 'Solution de traçabilité des chantiers',
      icon: '🏗️',
    },
    {
      id: 'meet-in-city',
      title: 'Meet in City',
      description: 'Plateforme de rencontre innovante',
      icon: '📌',
    },
    {
      id: 'edge-server',
      title: 'Déploiement automatisé de edge server',
      description: 'Du montage à l\'installation sur chantier le plus rapidement possible',
      icon: '🚀',
    },
    {
      id: 'music-ai',
      title: 'Génération de musique par IA',
      description: 'Ce n\'est pas démocratisé, et il y a une raison à ça',
      icon: '🎵',
    },
    {
      id: 'monitoring',
      title: 'Suivi à distance d\'un parc de server',
      description: 'Voir la santé des servers d\'un coup oeil',
      icon: '🖥️',
    },
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  navigate(event: string) {
    this.router.navigate(['projects/', event])
  }

}


