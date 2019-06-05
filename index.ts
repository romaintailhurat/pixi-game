import * as PIXI from "pixi.js";

import './style.css';

const KNIGHT_URL = "https://banner2.kisspng.com/20180414/awe/kisspng-digital-art-knight-pixel-5ad19b2d6fcb93.1645594715236861894579.jpg";

//Create a Pixi Application
let app = new PIXI.Application({width: 256, height: 256});
// Fill the whole screen
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// Create container for the knight image
let container = new PIXI.Container()
app.stage.addChild(container);

// Load an image
let loader = new PIXI.Loader();

loader.add(KNIGHT_URL).load(_ => {
  let sprite = new PIXI.Sprite(
    loader.resources[KNIGHT_URL].texture    
  );
  window._sprite = sprite; // DEBUG

  container.addChild(sprite);
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)