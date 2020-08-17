const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine, world;
var bob1, bob2,bob3,bob4,bob5;
var rope1, rope2,rope3,rope4,rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    bob1 = new Bob(300,350,50);
    bob2 = new Bob(350,350,50);
    bob3 = new Bob(400,350,50);
    bob4 = new Bob(450,350,50);
    bob5 = new Bob(500,350,50);

    roof1 = new Roof(400,150,300,50);

    rope1= new Rope(bob3.body,roof1.body,0,0);
    rope2= new Rope(bob4.body,roof1.body,50,0);
    rope3 = new Rope(bob5.body,roof1.body,100,0)
    rope4= new Rope(bob2.body,roof1.body,-50,0);
    rope5 = new Rope(bob1.body,roof1.body,-100,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
    
  roof1.display();
  drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:150})
}

}