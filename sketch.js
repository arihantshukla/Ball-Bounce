const Engine =Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;

var myengine,myworld
var ball, ground
function setup() {
  myengine=Engine.create();
  myworld=myengine.world
  createCanvas(800,800);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,790,800,10,ground_options)
  World.add(myworld,ground)
  var ball_options={
    restitution:6
  }
  ball=Bodies.circle(250,250,50,ball_options)
  World.add(myworld,ball)
  console.log(ball)
}

function draw() {
  background(0,255,0);  
  Engine.update(myengine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)

  
  drawSprites();
}