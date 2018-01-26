import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('menuPlan') triggerPlan: MatMenuTrigger;
  @ViewChild('menuIcon') triggerIcon: MatMenuTrigger;

  menuX: number;
  menuY: number;

  icons = [
    {
      name: 'Name1',
      icon: 'home',
      transform: 'translate(200px, -200px)',
      left: '200px',
      top: '-200px'
    },
    {
      name: 'Name2',
      icon: 'settings',
      transform: 'translate(100px, -100px)',
      left: '100px',
      top: '-100px'
    }
  ];

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

  onDragBegin(event, i) {
    console.log(event.style.transform);
    this.icons[i].transform = event.style.transform;
  }

  onDragEnd(event, i) {
    console.log(event.style.transform);
    this.icons[i].transform = event.style.transform;
  }

  openMenuPlan(event): void {
    event.preventDefault();
    event.stopPropagation();

    this.menuX = event.clientX;
    this.menuY = event.clientY;

    this.triggerPlan.openMenu();
  }

  openMenuIcon(event, i): void {
    event.preventDefault();
    event.stopPropagation();

    this.menuX = event.clientX;
    this.menuY = event.clientY;

    this.triggerIcon.openMenu();
  }
}
