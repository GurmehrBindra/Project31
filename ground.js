class Ground{
    constructor(x,y){
        this.body= Bodies.rectangle(x,y,400,20);
        this.width= 400;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}