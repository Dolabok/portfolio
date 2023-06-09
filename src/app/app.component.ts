import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
  }
}
