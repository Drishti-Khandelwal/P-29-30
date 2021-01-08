const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain1;



function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    //CREATING OBJECTS
    ground = new Ground(350,height-10,width,20);
    ground1 = new Ground(500,height-30,300,20);

    b1 = new Box(420,540,30,40);
    b2 = new Box(450,540,30,40);
    b3 = new Box(470,540,30,40);
    b4 = new Box(500,540,30,40);
    b5 = new Box(530,540,30,40);
    b6 = new Box(450,500,30,40);
    b7 = new Box(470,500,30,40);
    b8 = new Box(500,500,30,40);
    b9 = new Box(470,460,30,40);
    poly = new Polygon(200,550,30);
    chain1 = new Rope(poly.body,{x:200,y:550});

}

function draw(){
    background("Pink");
    Engine.update(engine);
    ground.display();
  ground1.display();
  fill("Blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  poly.display();
  chain1.display();
}
/*
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){
chain1.fly();


}

function keyPressed(){
if(keyCode===32){
   chain1.attach(bird.body);
}
}
*/