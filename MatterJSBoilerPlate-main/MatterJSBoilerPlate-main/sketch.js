
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b, g, b2, b1;
var radius=40;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);
    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	g = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
	World.add(world, g);
 
    b1 = Bodies.rectangle(800,800,20,20, { isStatic: true });
	World.add(world, b1);
    b2 = Bodies.rectangle(750,800,20,20, { isStatic: true });
	World.add(world, b2);

	var b_options={
		isStatic:false,
		restitution:0.3,
		 friction:0,
		 density:1.2
  
	}

	//Create the Bodies Here.

    b=Bodies.circle(260,100,radius/2,b_options);
	World.add(world,b);
	Engine.run(engine);
  
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  push();
  translate(g.position.x, g.position.y);
  fill("white");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  rect(g.position.x, g.position.y, width * 2, 1);
  pop();
  push();
  translate(b1.position.x, b1.position.y);
  fill("white");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  rect(b1.position.x, b1.position.y, width * 2, 1);
  pop();
  push();
  translate(b2.position.x, b2.position.y);
  fill("white");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  rect(b2.position.x, b2.position.y, width * 2, 1);
  pop();
  ellipse(b.position.x,b.position.y,radius,radius);
 
 function keyPressed(){
	if (keyCode===UP_ARROW){
        Matter.Body.setVelocity(this.body, {
		x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
	}
}

  drawSprites();
 
}

