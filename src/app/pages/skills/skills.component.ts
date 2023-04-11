import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  technicalSkills: Skill[] = [
    {
      id: 'build-app',
      title: 'Construire une application',
      description: 'Web / Mobile / Bureau',
      icon: '🏗️',
    },
    {
      id: 'build-api',
      title: 'Fournir une interface de programmation',
      description: 'API',
      icon: '🔌',
    },
    {
      id: 'data',
      title: 'Collecter, Analyser et traiter des données',
      description: 'Scrapping, Cleaning',
      icon: '📊',
    },
    {
      id: 'automation',
      title: 'Automatisation Intelligente',
      description: 'Classifier, OCR, Génération',
      icon: '🤖',
    },
    {
      id: 'server-management',
      title: 'Gestion de serveur et parc Unix',
      description: 'Déploiement automatisé, Monitoring',
      icon: '🖥️',
    },
  ];

  humanSkills: Skill[] = [
    {
      id: 'autonomy',
      title: 'Autonomie',
      description: '',
      icon: '🚀',
    },
    {
      id: 'english',
      title: 'Anglais',
      description: '',
      icon: '🌐',
    },
    {
      id: 'tech-watch',
      title: 'Veille technologique',
      description: '',
      icon: '🔍',
    },
    {
      id: 'agile',
      title: 'Méthode Agile',
      description: '',
      icon: '🔄',
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
      this.router.navigate(['skills/', event])
  }
}
