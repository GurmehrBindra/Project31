const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divison=[];
var divisonHeight= 300;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(395,400);
    for (var k = 0; k <= width;k=k+80) {
        divison.push(new Division(k,height=divisonHeight/2,10,divisonHeight)) 
    }
    for (var j =40; j <= width; j=j+50) {
        plinkos.push(new Plinko(j,75));
  }
    for (var j = 15; j <= width-10; j= j+50) {
       plinkos.push(new Plinko(j,175));  
    }

    if (frameCount%60===0) {
        particles.push(new Particle(random(width/2-10,width/2+10)))
    }
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }
    for (var k = 0; k < division.length; k++) {
        divison[k].display();   
    }
    for (var j  = 0; j < plinkos.length; j++) {
        plinkos[j].display();
        
    }
}