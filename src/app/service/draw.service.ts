import {ElementRef, Injectable} from '@angular/core';
import {DrawConst, DrawFloor, DrawItem} from '../draw/draw-item';
import {DRAWCONST, FLOORS} from '../data/floors';

@Injectable()
export class DrawService {

  floors: DrawFloor[];
  drawconst: DrawConst;

  constructor() {
    this.getConst();
    this.getFloors();
  }

  getConst(): DrawConst {
    this.drawconst = DRAWCONST;
    return this.drawconst;
  }

  getFloors(): DrawFloor[] {
    this.floors = FLOORS;
    return this.floors;
  }

  getTabs(): string[] {
    const tabs: string[] = [];

    for (let i = 0; i < this.floors.length ; i++) {
      tabs.push(this.floors[i].name);
    }

    return tabs;
  }

  drawFloor(id: number, canvas: ElementRef): void {
    const ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');

    for (let i = 0; i < this.floors[id].items.length; i++) {
      this.drawItem(this.floors[id].items[i], ctx);
    }
  }

  private drawItem(item: DrawItem, ctx: CanvasRenderingContext2D): void {
    switch (item.type) {
      case 'wall':
        ctx.lineWidth = this.drawconst.wallSize;
        ctx.strokeStyle = this.drawconst.wallColor;
        this.drawLine(item, ctx);
        break;
      case 'exterior':
        ctx.lineWidth = this.drawconst.exteriorSize;
        ctx.strokeStyle = this.drawconst.exteriorColor;
        this.drawLine(item, ctx);
        break;
      case 'door':
        ctx.lineWidth = this.drawconst.doorSize;
        ctx.strokeStyle = this.drawconst.doorColor;
        this.drawLine(item, ctx);
        break;
      case 'window':
        ctx.lineWidth = this.drawconst.windowSize;
        ctx.strokeStyle = this.drawconst.windowColor;
        this.drawLine(item, ctx);
        break;
      case 'cabinet':
        ctx.lineWidth = this.drawconst.cabinetSize;
        ctx.strokeStyle = this.drawconst.cabinetColor;
        this.drawCabinet(item, ctx);
        break;
      case 'rect':
        ctx.lineWidth = this.drawconst.rectSize;
        ctx.strokeStyle = this.drawconst.rectColor;
        this.drawRect(item, ctx);
        break;
    }
  }

  private drawLine(item: DrawItem, ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(item.x * this.drawconst.scale + this.drawconst.xMargin, item.y * this.drawconst.scale + this.drawconst.yMargin);
    ctx.lineTo(item.xe * this.drawconst.scale + this.drawconst.xMargin, item.ye * this.drawconst.scale + this.drawconst.yMargin);
    ctx.stroke();
  }

  private drawCabinet(item: DrawItem, ctx: CanvasRenderingContext2D): void {
    this.drawRect(item, ctx);
    ctx.beginPath();
    ctx.moveTo(item.x * this.drawconst.scale + this.drawconst.xMargin, item.y * this.drawconst.scale + this.drawconst.yMargin);
    ctx.lineTo(item.xe * this.drawconst.scale + this.drawconst.xMargin, item.ye * this.drawconst.scale + this.drawconst.yMargin);
    ctx.moveTo(item.x * this.drawconst.scale + this.drawconst.xMargin, item.ye * this.drawconst.scale + this.drawconst.yMargin);
    ctx.lineTo(item.xe * this.drawconst.scale + this.drawconst.xMargin, item.y * this.drawconst.scale + this.drawconst.yMargin);
    ctx.stroke();
  }

  private drawRect(item: DrawItem, ctx: CanvasRenderingContext2D): void {
    ctx.rect(
      item.x * this.drawconst.scale + this.drawconst.xMargin,
      item.y * this.drawconst.scale + this.drawconst.yMargin,
      (item.xe - item.x) * this.drawconst.scale,
      (item.ye - item.y) * this.drawconst.scale);
    ctx.stroke();
  }
}
