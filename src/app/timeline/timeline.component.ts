import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  selector: 'vs-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let scrubberBrush = d3.svg.brush()
    //   .on('brush', () => {
    //     this.moveScrubber();
    // });
    //
    // d3.select('.scrubber-bar').call(scrubberBrush);

    let drag = d3.behavior.drag()
      .on("drag", (d,i) => {
        this.moveScrubber(d3.event['x']);
    });

    d3.select('#scrubber').call(drag);

  }

  moveScrubber(x: number): void {
    d3.selectAll('.scrubber-bar').attr('transform', 'translate(' + x + ',0)');
  }
}
