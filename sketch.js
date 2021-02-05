
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

	//Create the Bodies Here.
  roof=new Ground (350,100,400,20)
  b1=new Bob(200,300)
	R1=new rope(b1.bob,{x:200,y:100})
	b2=new Bob(250,300)
	R2=new rope(b2.bob,{x:250,y:100})
	b3=new Bob(300,300)
	R3=new rope(b3.bob,{x:300,y:100})	
	b4=new Bob(350,300)
  R4=new rope(b4.bob,{x:350,y:100})		
  b5=new Bob(400,300)
	R5=new rope(b5.bob,{x:400,y:100})
	b5=new Bob(400,300)
	R5=new rope(b5.bob,{x:400,y:100})
	b6=new Bob(450,300)
	R6=new rope(b6.bob,{x:450,y:100})
  b7=new Bob(500,300)
	R7=new rope(b7.bob,{x:500,y:100})


  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80);
  roof.display()
  b1.display() 
  R1.display()
  b2.display()
  R2.display()
  b3.display()
  R3.display()
  b4.display()
  R4.display()
  b5.display()
  R5.display()
  b6.display()
  R6.display()
  b7.display()
  R7.display()
  drawSprites();
 
}



