class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pointA=this.rope.bodyA.position;
      var pointB=this.rope.bodyB.position;

      strokeWight(3);

      var Anchor1X=pointA.x;
      var Anchor1Y=pointA.y;

      var Anchor2X=pointB.x;
      var Anchor2Y=pointB.y;

      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
  };