const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
   var canvas = createCanvas(400,400);
 //createSprite(200, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;
 var options_ground ={
isStatic: true

 }
 var options_ball = {
   restitution: 1.0
 }
 ground = Bodies.rectangle(200,390,200,20,options_ground);
console.log(ground)
 World.add(world,ground);
ball = Bodies.circle(200,100,20,options_ball);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}