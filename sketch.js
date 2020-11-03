const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1;
var dustbin, dustbinImg;
var paper,paperImg

function preload(){
  dustbinImg = loadImage("sprites/dustbingreen.png");
  paperImg = loadImage("sprites/paper.png");
}
function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	box1 = new Box(1000,430,100,15);
	box2 = new Box(946,375,15,100);
	box3 = new Box(1054,375,15,100);
  ground = createSprite(675,450,1600,10);

  paper = createSprite(200,415,15,15,{'restitution':1.0});
  paper.addImage(paperImg);
  paper.scale = 0.4;

  dustbin = createSprite(1000,370,10,10);
  dustbin.addImage(dustbinImg);
  dustbin.scale =0.5;

  
}  


function draw() {
  rectMode(CENTER);
  background(220);
  box1.display();
  box2.display();
  box3.display();
    
  if(keyWentDown("UP_ARROW")){
    paper.velocityY = -7;
  }
  if(keyWentUp("UP_ARROW")){
    paper.velocityY = 0;
  }
  if(keyWentDown("RIGHT_ARROW")){
    paper.velocityX = 7;
  }
  if(keyWentUp("RIGHT_ARROW")){
    paper.velocityX = 0;
  }
  if(keyWentDown("LEFT_ARROW")){
    paper.velocityX = -7;
  }
  if(keyWentUp("LEFT_ARROW")){
    paper.velocityX = 0;
  }
  if(keyWentDown("DOWN_ARROW")){
    paper.velocityY = 7;
  }
  if(keyWentUp("DOWN_ARROW")){
    paper.velocityY = 0;
  }
  

  drawSprites();
}



