import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

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

  xMargin = 90;
  yMargin = 70;
  scale = 0.4;

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

    this.draw0();
    this.draw1();
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

  draw0(): void {
    const ctx: CanvasRenderingContext2D = this.canvas0.nativeElement.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#888888';
    ctx.beginPath();
    ctx.moveTo(this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);
    ctx.lineTo(1050 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);
    ctx.lineTo(1100 * this.scale + this.xMargin, 500 * this.scale + this.yMargin);
    ctx.lineTo(1100 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(0 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(0 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);

    ctx.moveTo(600 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.moveTo(850 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(1070 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.moveTo(600 * this.scale + this.xMargin, 300 * this.scale + this.yMargin);
    ctx.lineTo(1100 * this.scale + this.xMargin, 300 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#EEEEEE';

    ctx.beginPath();
    // fenetre rue
    ctx.moveTo(75 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(525 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.beginPath();

    // porte cave vin
    ctx.moveTo(800 * this.scale + this.xMargin, 300 * this.scale + this.yMargin);
    ctx.lineTo(900 * this.scale + this.xMargin, 300 * this.scale + this.yMargin);


    ctx.stroke();
  }


  draw1(): void {
    const ctx: CanvasRenderingContext2D = this.canvas1.nativeElement.getContext('2d');

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
    ctx.moveTo(710 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.lineTo(1063 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.moveTo(870 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.lineTo(870 * this.scale + this.xMargin, 1350 * this.scale + this.yMargin);
    ctx.moveTo(1100 * this.scale + this.xMargin, 500 * this.scale + this.yMargin);
    ctx.lineTo(710 * this.scale + this.xMargin, 500 * this.scale + this.yMargin);
    ctx.moveTo(900 * this.scale + this.xMargin, 500 * this.scale + this.yMargin);
    ctx.lineTo(900 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.moveTo(900 * this.scale + this.xMargin, 620 * this.scale + this.yMargin);
    ctx.lineTo(710 * this.scale + this.xMargin, 620 * this.scale + this.yMargin);
    ctx.moveTo(770 * this.scale + this.xMargin, 620 * this.scale + this.yMargin);
    ctx.lineTo(770 * this.scale + this.xMargin, 850 * this.scale + this.yMargin);
    ctx.moveTo(800 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);
    ctx.lineTo(870 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);
    ctx.moveTo(800 * this.scale + this.xMargin, 1350 * this.scale + this.yMargin);
    ctx.lineTo(870 * this.scale + this.xMargin, 1350 * this.scale + this.yMargin);
    ctx.moveTo(580 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);
    ctx.lineTo(680 * this.scale + this.xMargin, 980 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#888888';
    // ilot cuisine
    ctx.rect(580 * this.scale + this.xMargin, 980 * this.scale + this.yMargin, 100 * this.scale, 370 * this.scale);
    // armoire cuisine
    this.rectCross(ctx, 800 * this.scale + this.xMargin, 980 * this.scale + this.yMargin, 70 * this.scale, 370 * this.scale);
    // dressing
    this.rectCross(ctx, 710 * this.scale + this.xMargin, 620 * this.scale + this.yMargin, 60 * this.scale, 230 * this.scale);

    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.rect(150 * this.scale + this.xMargin, 1280 * this.scale + this.yMargin, 250 * this.scale, 110 * this.scale);

    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#CCCCCC';
    ctx.beginPath();
    ctx.moveTo(0 * this.scale + this.xMargin, 740 * this.scale + this.yMargin);
    ctx.lineTo(0 * this.scale + this.xMargin, -30 * this.scale + this.yMargin);
    ctx.lineTo(720 * this.scale + this.xMargin, -30 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#EEEEEE';

    ctx.beginPath();
    // coulissant living
    ctx.moveTo(75 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    ctx.lineTo(525 * this.scale + this.xMargin, 750 * this.scale + this.yMargin);
    // fenetre living rue
    ctx.moveTo(75 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(525 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.moveTo(690 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    ctx.lineTo(790 * this.scale + this.xMargin, 1500 * this.scale + this.yMargin);
    // fenetre bureau
    ctx.moveTo(600 * this.scale + this.xMargin, 175 * this.scale + this.yMargin);
    ctx.lineTo(600 * this.scale + this.xMargin, 475 * this.scale + this.yMargin);
    ctx.moveTo(610 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);
    ctx.lineTo(710 * this.scale + this.xMargin, 100 * this.scale + this.yMargin);

    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.beginPath();

    // porte entree
    ctx.moveTo(870 * this.scale + this.xMargin, 865 * this.scale + this.yMargin);
    ctx.lineTo(870 * this.scale + this.xMargin, 965 * this.scale + this.yMargin);

    // porte wc
    ctx.moveTo(790 * this.scale + this.xMargin, 620 * this.scale + this.yMargin);
    ctx.lineTo(880 * this.scale + this.xMargin, 620 * this.scale + this.yMargin);

    // porte buanderie
    ctx.moveTo(900 * this.scale + this.xMargin, 515 * this.scale + this.yMargin);
    ctx.lineTo(900 * this.scale + this.xMargin, 605 * this.scale + this.yMargin);

    ctx.stroke();
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
