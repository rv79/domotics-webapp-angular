import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {

    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

    // Draw the clip path that will mask everything else
    // that we'll draw later.
    console.log('begin drawing');
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(0, 500);
    ctx.lineTo(250, 500);
    ctx.lineTo(250, 350);
    ctx.lineTo(350, 350);
    ctx.stroke();

    console.log('finish drawing');

  }

}
