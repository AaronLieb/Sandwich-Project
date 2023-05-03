import * as PIXI from 'pixi.js';

export let app;

class Sprite {
  constructor(pixiSprite, width, height, expansionZone, physicalHeight) {
    this.pixiSprite = pixiSprite;
    this.width = width;
    this.height = height;
    this.expansionZone = expansionZone;
    this.physicalHeight = physicalHeight;
  }
}

class Component {
  constructor(sprite, width) {
    this.sprite = sprite;
    this.width = width;
  }
}

export const init = canvas => {
  app = new PIXI.Application({
    view: canvas,
    backgroundColor: 0xffffff,
    width: 512,
    height: 512
  });
}
