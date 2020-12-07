class Bob {
    constructor(x, y, width, height,) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body =Bodies.circle(200,200,10,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("magenta");
      fill("magenta");
      //ellipseMode(RADIUS);
      //ellipse(0,0,20,20);
      pop();
    }
  };
  