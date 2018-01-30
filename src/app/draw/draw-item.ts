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
}
