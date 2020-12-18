class Ground 
{
    constructor()
    {

        var option=
        {
            isStatic : true
        }

        
      this.body=Bodies.rectangle(200,350,400,30,option);
       World.add(world,this.body);  
    }

    display()
    {
        var pos=this.body.position
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,400,30)
        


        
    }
}