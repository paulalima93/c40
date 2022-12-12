var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1_img, car2_img, track
var allPlayers;
var car1, car2, cars= []
var obstacle1Image, obstacle2Image;
var fuels, powerCoins, obstacles;
function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  //faltou chamar a função getState 
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount === 2) {
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
