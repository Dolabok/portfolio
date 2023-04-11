import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  scrollToSection() {
    const section = document.getElementById('presentation');
    window.scrollTo({
      top: section?.offsetTop,
      behavior: 'smooth'
    });
  }

  navigate(event: string) {
    this.router.navigate(['timeline/', event])
  }
}
