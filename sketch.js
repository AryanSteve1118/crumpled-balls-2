
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground;
var dustbin;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,height-40,40)
	ground = new Ground(400,height-25,width,20)
	dustbin = new Dustbin(550,height-150,150,100)
	rect1 = new Ground(630,height-40,150,15)
	rect2 = new Ground(700,height-110,15,130)
	rect3 = new Ground(550,height-110,15,130)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(225);
  
 
  dustbin.display();
  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-65})
	}
}



