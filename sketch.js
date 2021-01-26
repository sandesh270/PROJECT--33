const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos = []
var particles = []
var divisions = []
var block , score = 0;;
var divisionHeight = 200;
var chance = 5;
var cap = 0
var state = "start"
function setup(){
   createCanvas(650,700)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,height-10,480,20)
    ground1 = new EGround(0,350,20,900);
    ground2 = new EGround(480,350,20,900);
    ground3 = new EGround(240,height,500,20);
    ball = new Particle(220,-20,5)
    block = createSprite(240,20,500,40)
    block1 = createSprite(240,660,500,60)
    for(var k = 0;k<=480;k=k+60){
        divisions.push(new Division(k,height-divisionHeight/2,5,divisionHeight))
    }
    for(var j = 40;j<=480;j+=50){
        plinkos.push(new Plinko(j,75))
    }
    for(var j = 15;j<=480-10;j+=50){
        plinkos.push(new Plinko(j,175))
    }
    for(var j = 40;j<=480;j+=50){
        plinkos.push(new Plinko(j,275))
    }
    for(var j = 15;j<=480-10;j+=50){
        plinkos.push(new Plinko(j,375))
    }
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    //strokeWeight(4);
    //fill(255,255,255);
    
   if(state==="play"){
   
    for(var k = 0;k<divisions.length;k++){
        
        divisions[k].display();
        
    }
   
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
   
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    
    for(var j = 0;j<plinkos.length;j++){
        
        plinkos[j].display();
        
    }
    if(mousePressedOver(block)&&frameCount%7===0&&chance>0){
        particles.push(new Particle(random(10,440),-10,10))
        chance-=1
    }
    for(var j = 0;j<particles.length;j++){
        
        particles[j].display();
    }
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    //ball.display();
    //mousePressed();
    drawSprites();
    

 
    // if(particles[j].body.position.x>0&&particles[j].body.position.x<100&&particles.body.position.y>600){
    //     score += 100;
    // }
    
    fill(255,255,255)
    textSize(20)
    text("  100        0      500    200     1000    500    100     0",0,600)
    fill("yellow")
    text("chance left: "+chance,500,20)
    text("score: "+score,500,40)
    fill("green")
    text("CLICK HERE",200,30)
    text("😀😀😀😀😀😀😀😀😀😀😀😀😀😀",40,670)

}
if(state==="start"){
    fill(random(255),random(255),random(255));
    textSize(70)
    text("(-:PLINKO:-)",50,250)
    fill("red")
    textSize(20)
    text("PLINKO IS A GAME OF LUCK.",20,300)
    fill("yellow")
    text("IN THIS GAME YOU CAN GET MORE POINTS OR SOMETIMES ",20,350)
    text("LESS OR EQUAL AS MENTIONED ON DIVISIONS",20,400)
    fill("blue")
    text("PRESS ON THE 'CLICK HERE' TO MAKE THE BALLS FALL",20,450)
    fill("white")
    textSize(40)
    text("PRESS SPACE TO START GAME ",20,600)
}
if(state==="start"&&keyCode===32){
    state="play"
}
}



