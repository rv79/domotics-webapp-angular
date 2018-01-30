import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {DrawService} from '../service/draw.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('canvas0') canvas0: ElementRef;
  @ViewChild('canvas1') canvas1: ElementRef;
  @ViewChild('canvas2') canvas2: ElementRef;
  @ViewChild('menuPlan') triggerPlan: MatMenuTrigger;
  @ViewChild('menuIcon') triggerIcon: MatMenuTrigger;

  menuX: number;
  menuY: number;

  tabs: string[] = [];

  xMargin = 90;
  yMargin = 30;
  scale = 0.38;

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

  constructor(private drawService: DrawService) { }

  ngOnInit() {
    this.tabs = this.drawService.getTabs();

    this.drawService.drawFloor(0, this.canvas0);
    this.drawService.drawFloor(1, this.canvas1);

    this.draw2();
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

  rectCross(ctx, x: number, y: number, w: number, h: number): void {
    ctx.rect(x, y, w, h);
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y + h);
    ctx.moveTo(x + w, y);
    ctx.lineTo(x, y + h);
  }

  draw2(): void {
    const ctx: CanvasRenderingContext2D = this.canvas2.nativeElement.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#888888';
    ctx.beginPath();
    ctx.moveTo(this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(1000 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(1100 * this.scale + this.xMargin, 500 * this.scale + this.yMargin);
    ctx.lineTo(1100 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(0 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(0 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);

    ctx.moveTo(600 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.lineTo(1063 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);

    ctx.moveTo(1100 * this.scale + this.xMargin, 450 * this.scale + this.yMargin);
    ctx.lineTo(720 * this.scale + this.xMargin, 450 * this.scale + this.yMargin);
    ctx.lineTo(720 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);

    ctx.moveTo(720 * this.scale + this.xMargin, 570 * this.scale + this.yMargin);
    ctx.lineTo(900 * this.scale + this.xMargin, 570 * this.scale + this.yMargin);

    ctx.moveTo(600 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 970 * this.scale + this.yMargin);
    ctx.lineTo(880 * this.scale + this.xMargin, 970 * this.scale + this.yMargin);
    ctx.lineTo(880 * this.scale + this.xMargin, 1390 * this.scale + this.yMargin);
    ctx.lineTo(1010 * this.scale + this.xMargin, 1390 * this.scale + this.yMargin);

    ctx.moveTo(600 * this.scale + this.xMargin, 1100 * this.scale + this.yMargin);
    ctx.lineTo(880 * this.scale + this.xMargin, 1100 * this.scale + this.yMargin);

    ctx.moveTo(0 * this.scale + this.xMargin, 1125 * this.scale + this.yMargin);
    ctx.lineTo(410 * this.scale + this.xMargin, 1125 * this.scale + this.yMargin);
    ctx.lineTo(410 * this.scale + this.xMargin, 870 * this.scale + this.yMargin);
    ctx.lineTo(480 * this.scale + this.xMargin, 870 * this.scale + this.yMargin);
    ctx.lineTo(480 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);

    ctx.moveTo(410 * this.scale + this.xMargin, 1125 * this.scale + this.yMargin);
    ctx.lineTo(410 * this.scale + this.xMargin, 1300 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 1300 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 2;
    // dressing
    this.rectCross(ctx, 410 * this.scale + this.xMargin, 870 * this.scale + this.yMargin, 70 * this.scale, 430 * this.scale);

    this.rectCross(ctx, 720 * this.scale + this.xMargin, 570 * this.scale + this.yMargin, 180 * this.scale, 70 * this.scale);
    this.rectCross(ctx, 720 * this.scale + this.xMargin, 780 * this.scale + this.yMargin, 340 * this.scale, 70 * this.scale);

    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#EEEEEE';

    ctx.beginPath();
    // fenetre terrasse
    ctx.moveTo(75 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(300 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    // fenetre rue
    ctx.moveTo(300 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(525 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.moveTo(690 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(790 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    // fenetre chambre parent
    ctx.moveTo(600 * this.scale + this.xMargin, 175 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 475 * this.scale + this.yMargin);
    ctx.moveTo(610 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(710 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.beginPath();

    // porte chambre parent
    ctx.moveTo(615 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.lineTo(705 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.moveTo(720 * this.scale + this.xMargin, 660 * this.scale + this.yMargin);
    ctx.lineTo(720 * this.scale + this.xMargin, 760 * this.scale + this.yMargin);

    // porte wc
    ctx.moveTo(690 * this.scale + this.xMargin, 970 * this.scale + this.yMargin);
    ctx.lineTo(780 * this.scale + this.xMargin, 970 * this.scale + this.yMargin);

    // porte sdb
    ctx.moveTo(600 * this.scale + this.xMargin, 1195 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 1285 * this.scale + this.yMargin);

    // porte chambre rue
    ctx.moveTo(495 * this.scale + this.xMargin, 1300 * this.scale + this.yMargin);
    ctx.lineTo(585 * this.scale + this.xMargin, 1300 * this.scale + this.yMargin);

    // porte chambre terrasse
    ctx.moveTo(480 * this.scale + this.xMargin, 765 * this.scale + this.yMargin);
    ctx.lineTo(480 * this.scale + this.xMargin, 855 * this.scale + this.yMargin);

    ctx.stroke();

  }


}
