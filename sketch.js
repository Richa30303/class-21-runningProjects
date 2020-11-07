var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 100, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(800 , 100 , 80, 50);
  rect3.shapeColor = "green";

  rect1.velocityX = 5;
  rect3.velocityX = -5;

  

  
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  createEdgeSprites();



  bounceOff(rect1,rect3);
// isTouching(movingRect,fixedRect);
  
  drawSprites();
}


