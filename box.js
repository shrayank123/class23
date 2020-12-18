class Box
{
    constructor(x,y,width,height)
    {
        var option = {
         restitution: 1.5
          }

       this.body =  Bodies.rectangle(x,y,width,height,option);
       this.width = width;
       this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill("green")
        stroke("red");
        strokeWeight(4);
        translate(pos.x,pos.y)
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}