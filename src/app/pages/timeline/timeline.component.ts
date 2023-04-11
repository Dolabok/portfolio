import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timelineItems = [
    {
      period: 'Février 2021 - Aujourd\'hui',
      title: 'Développeur full stack chez Altaroad',
      location: 'Paris'
    },
    {
      period: 'Novembre 2019 - Aujourd\'hui',
      title: 'Co-fondateur de meet in city',
      location: 'Agen'
    },
    {
      period: 'Septembre 2018 - Juillet 2023',
      title: 'Master à In\'tech',
      location: 'Agen'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  navigate(event: string) {
    this.router.navigate(['timeline/', event])
  }

}
