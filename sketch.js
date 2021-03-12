var fixedRect, movingRect;
var o1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

o1 = createSprite(100,100,50,50);
o1.shapeColor = "green";

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,o1)) {
    movingRect.shapeColor = "blue";
    o1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    o1.shapeColor = "green";
  }


  bounceOff(movingRect,fixedRect);

  drawSprites();
}

