class Particle{
  constructor(x,y,r){
    var options = {
      restitution:0.4
    }
    this.r = r;
    this.body = Bodies.circle(x,y,this.r,options)
    this.color = color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
if(pos.y>550&&pos.y<560&&pos.x<60&&pos.x>0&&chance>0 ){
  score+=100
  
}
if(pos.y>550&&pos.y<560&&pos.x<120&&pos.x>60&&chance>0 ){
  score+=0
 
}
if(pos.y>550&&pos.y<560&&pos.x<180&&pos.x>120&&chance>0 ){
  score+=500
  
}
if(pos.y>550&&pos.y<560&&pos.x<240&&pos.x>180&&chance>0 ){
  score+=200
  
}
if(pos.y>550&&pos.y<560&&pos.x<300&&pos.x>240&&chance>0 ){
  score+=1000
 
}
if(pos.y>550&&pos.y<560&&pos.x<360&&pos.x>300&&chance>0 ){
  score+=500
 
}
if(pos.y>550&&pos.y<460&&pos.x<420&&pos.x>360&&chance>0 ){
  score+=100
 
}
if(pos.y>550&&pos.y<460&&pos.x<580&&pos.x42>0&&chance>0 ){
  score+=0
 
}
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
}