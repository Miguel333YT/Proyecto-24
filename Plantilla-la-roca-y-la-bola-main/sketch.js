//aqui se crean las constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

//aqui se crean las variables
var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
   //isStatic: true hace que el suelo permanezca estatico 
    isStatic: true
  };
 
  //las restituciones crean el nivel de rebote de los objetos
  var ball_options = {

     restitution: 1,
  }

  var rock_options = {
     restitution: 0.2,

  }
  
  //aqui se crea el boton de la flecha hacia arriba y su posicion, tamaño y aplicar fuerza con un click
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  //aqui se añaden al mundo los objetos y sus configuraciones predeterminadas por el motor grafico
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  //aqui se indica hasta donde rebotar la bola y la pelota
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();
}

//el function vForce sirve para aplicar fuerza a cuerpos
function vForce()
{
   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}


  


