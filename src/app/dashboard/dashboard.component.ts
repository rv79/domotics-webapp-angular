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
    this.drawService.drawFloor(2, this.canvas2);
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
