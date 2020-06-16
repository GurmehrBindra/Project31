class Plinko{
    constructor(x,y){
        this.body= Bodies.circle(x,y,10);
        this.radius= 10;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);   
    }
}