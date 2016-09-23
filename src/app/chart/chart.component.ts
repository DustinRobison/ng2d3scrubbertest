import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vs-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
