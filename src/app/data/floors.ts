import {DrawConst, DrawFloor} from '../draw/draw-item';

export const DRAWCONST: DrawConst = {
  scale: 0.38,
  xMargin: 90,
  yMargin: 30,
  wallColor: '#888888',
  wallSize: 5,
  windowColor: '#EEEEEE',
  windowSize: 4,
  doorColor: '#EEEEEE',
  doorSize: 3,
  cabinetColor: '#888888',
  cabinetSize: 2,
  rectColor: '#888888',
  rectSize: 2,
  exteriorColor: '#CCCCCC',
  exteriorSize: 5,
  canvasWidth: 500,
  canvasHeight: 500
};

export const FLOORS: DrawFloor[] = [
  {
    name: 'Sous-sol',
    items: [
      {type: 'wall', x: 0, y: 1500, xe: 600, ye: 1500},
      {type: 'wall', x: 600, y: 1500, xe: 600, ye: 980},
      {type: 'wall', x: 600, y: 980, xe: 1050, ye: 980},
      {type: 'wall', x: 1050, y: 980, xe: 1100, ye: 500},
      {type: 'wall', x: 1100, y: 500, xe: 1100, ye: 100},
      {type: 'wall', x: 1100, y: 100, xe: 600, ye: 100},
      {type: 'wall', x: 600, y: 100, xe: 600, ye: 750},
      {type: 'wall', x: 600, y: 750, xe: 0, ye: 750},
      {type: 'wall', x: 0, y: 750, xe: 0, ye: 1500},

      {type: 'wall', x: 600, y: 750, xe: 600, ye: 850},
      {type: 'wall', x: 850, y: 750, xe: 1070, ye: 750},
      {type: 'wall', x: 600, y: 300, xe: 1100, ye: 300},

      {type: 'door', x: 75, y: 1500, xe: 525, ye: 1500},
      {type: 'door', x: 800, y: 300, xe: 900, ye: 300},
      {type: 'door', x: 750, y: 980, xe: 850, ye: 980}
    ]
  },
  {
    name: 'Rez',
    items: [
      {type: 'wall', x: 0, y: 1500, xe: 1000, ye: 1500},
      {type: 'wall', x: 1000, y: 1500, xe: 1100, ye: 500},
      {type: 'wall', x: 1100, y: 500, xe: 1100, ye: 100},
      {type: 'wall', x: 1100, y: 100, xe: 600, ye: 100},
      {type: 'wall', x: 600, y: 100, xe: 600, ye: 750},
      {type: 'wall', x: 600, y: 750, xe: 0, ye: 750},
      {type: 'wall', x: 0, y: 750, xe: 0, ye: 1500},

      {type: 'wall', x: 600, y: 750, xe: 600, ye: 850},
      {type: 'wall', x: 710, y: 850, xe: 1063, ye: 850},
      {type: 'wall', x: 870, y: 850, xe: 870, ye: 1350},
      {type: 'wall', x: 1100, y: 500, xe: 710, ye: 500},
      {type: 'wall', x: 900, y: 500, xe: 900, ye: 850},
      {type: 'wall', x: 900, y: 620, xe: 710, ye: 620},
      {type: 'wall', x: 770, y: 620, xe: 770, ye: 850},
      {type: 'wall', x: 800, y: 980, xe: 870, ye: 980},
      {type: 'wall', x: 800, y: 1350, xe: 870, ye: 1350},
      {type: 'wall', x: 580, y: 980, xe: 680, ye: 980},

      {type: 'door', x: 870, y: 865, xe: 870, ye: 965},
      {type: 'door', x: 790, y: 620, xe: 880, ye: 620},
      {type: 'door', x: 900, y: 515, xe: 900, ye: 605},

      {type: 'window', x: 75, y: 750, xe: 525, ye: 750},
      {type: 'window', x: 75, y: 1500, xe: 525, ye: 1500},
      {type: 'window', x: 690, y: 1500, xe: 790, ye: 1500},
      {type: 'window', x: 600, y: 175, xe: 600, ye: 475},
      {type: 'window', x: 610, y: 100, xe: 710, ye: 100},

      {type: 'cabinet', x: 800, y: 980, xe: 870, ye: 1350},
      {type: 'cabinet', x: 710, y: 620, xe: 770, ye: 850},

      {type: 'rect', x: 580, y: 980, xe: 680, ye: 1350},
      {type: 'rect', x: 150, y: 1280, xe: 400, ye: 1390},

      {type: 'exterior', x: 0, y: 740, xe: 0, ye: -30},
      {type: 'exterior', x: 0, y: -30, xe: 720, ye: -30}
    ]
  }
];
