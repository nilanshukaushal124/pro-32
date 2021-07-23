var button,ball,ground;

function setup() {
  createCanvas(600,400);
 ball=createSprite(250, 203, 50, 50);
 ball.shapeColor="brown"
 ground=createSprite(200,220,100,15);
 ground.shapeColor="brown"
 
}

function draw() {
  background("black");  
button=createButton("click to Blow ")
button.position(width /2,height - 100);
button.class("blowButton");
button.mousePressed("blow");

  drawSprites();
}