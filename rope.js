class Rope{
    constructor(body1,body2,offsetX,offsetY){
        var options={
            bodyA:body1,
            bodyB:body2,
            offsetX=offsetX,
            offsetY=offsetY,
            length:50,
            stiffness:0.3
        }
        this.rope=Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        var pos1=this.body.bodyA.position;
        var pos2=this.body.bodyB.position;
        strokeWeight(5);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }

}