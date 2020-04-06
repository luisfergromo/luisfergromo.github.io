import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'luisfergromo';

  createPdf() {
    window.print();
  }

  constructor() { }

  ngOnInit() {
  }

}
