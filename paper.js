class Paper{
    constructor(x,y,r){
      var options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2 
      }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body= Bodies.circle(this.x,this.y,this.r/2,options)
       World.add(world,this.body)
       this.Image = loadImage("paper.png")
    }// refresh and check once now?? 
 //now?
 //no it is not showig even that ball
 // join google meet
//  meet.google.com/anu-mrce-kji
 //joining?joining ok
    display(){
        var paperpos = this.body.position
        var angle=this.body.angle;
        push()
        translate(paperpos.x,paperpos.y)
        rotate(angle);
        // rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255);
        // ellipseMode(CENTER)
        // ellipse(0,0,this.r,this.r)
        imageMode(CENTER);
        image(this.Image, 0,0,this.r ,this.r);
        pop()
    }//now it is working-- open sketch.js
}//mam please check sketch.js may be problems in the values