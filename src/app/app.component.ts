import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test of Slider across multiple SVGs';
  svgArea: any;
  tails: any[] = [];

  ngOnInit() {
    this.svgArea = d3.select('#svg-area');

    this.tails.push('N014VX');
    this.tails.push('N101CA');


  }
}
