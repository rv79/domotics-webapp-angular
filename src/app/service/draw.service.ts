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
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#888888';
        this.drawLine(item, ctx);
        break;
      case 'exterior':
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#CCCCCC';
        this.drawLine(item, ctx);
        break;
      case 'door':
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#EEEEEE';
        this.drawLine(item, ctx);
        break;
      case 'window':
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#EEEEEE';
        this.drawLine(item, ctx);
        break;
      case 'cabinet':
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#888888';
        this.drawCabinet(item, ctx);
        break;
      case 'rect':
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#888888';
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
