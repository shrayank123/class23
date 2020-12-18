const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 
 //creating objects.
  box3= new Box(240,100,50,50);
  box2= new Box(200,200,50,60);
 // box1 = new Box(300,200,50,50);
  ground = new Ground();
 
 
}

function draw()
 {
  background("lightblue"); 
  Engine.update(engine);
  
 //  box1.display();
   box2.display();
   box3.display();
   ground.display();
  

}