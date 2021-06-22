class chain{
    constructor(pointA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB :pointB,
            stiffness:0.04,
            lenght:200
           
        }
        this.pointB=pointB
        this.body=constraint,create(options);
        World.add(world,this.chain);

    }

    display(){
        if(this.chain.bodyA);
        var pointA=this.chain.bodyA.position;
        var pointB=this.pontB;
        strokeWeight(4);
        line (pointA.x,pointA.pointB.x,pointB.y)
    }
}
    