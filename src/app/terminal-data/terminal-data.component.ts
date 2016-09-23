import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vs-terminal-data',
  templateUrl: './terminal-data.component.html',
  styleUrls: ['./terminal-data.component.css']
})
export class TerminalDataComponent implements OnInit {

  @Input() tailId: string;

  charts: string[];

  constructor() { }

  ngOnInit() {
    this.charts = [];
    this.charts.push("beams and handovers");
    this.charts.push("mt data rates");
  }

}
