
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1= new Bob(50,750);
	bob2= new Bob(80,750);
	bob3= new Bob(110,750);
	bob4= new Bob(140,750);
	bob5= new Bob(170,750);
	roof = new Roof(20,height,100,20);
	rope1= new Rope(bob1.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  roof1.display();

  drawSprites();
 
}



