import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection() {
    const section = document.getElementById('presentation');
    window.scrollTo({
      top: section?.offsetTop,
      behavior: 'smooth'
    });
  }


}
