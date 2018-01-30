export interface DrawFloor {
  name: string;
  items: DrawItem[];
}

export interface DrawItem {
  type: string;
  x: number;
  y: number;
  xe: number;
  ye: number;
}

export interface DrawConst {
  scale: number;
  xMargin: number;
  yMargin: number;
  wallColor: string;
  wallSize: number;
  windowColor: string;
  windowSize: number;
  doorColor: string;
  doorSize: number;
  cabinetColor: string;
  cabinetSize: number;
  rectColor: string;
  rectSize: number;
  exteriorColor: string;
  exteriorSize: number;
  canvasWidth: number;
  canvasHeight: number;
}
