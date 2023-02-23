var trex, trexImg;
var chao, chaoImg;

var paredes;

function preload() {
  //carrega imagens, animações, sons etc...
  trexImg = loadAnimation("trex3.png", "trex4.png");

  chaoImg = loadImage("ground2.png");
}

function setup() {
  //função de configuração
  createCanvas(600, 200);

  trex = createSprite(50, 170, 30, 30);
  trex.addAnimation("running", trexImg);

  trex.scale = 0.5;

  chao = createSprite(300, 190, 600, 20);
  chao.addImage(chaoImg);
  chao.velocityX = -5;

  paredes = createEdgeSprites();
}

function draw() {
  background("white");

  if (keyDown("space")) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1;

  trex.collide(chao);
  trex.collide(paredes);

  if (chao.x < 0) {
    chao.x = chao.width / 2;
  }

  drawSprites();
}
