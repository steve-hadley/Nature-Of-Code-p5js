
class Mover {
    constructor() {
      this.size = 25;
      this.mass = 1;
      this.position = createVector(width / 2, height / 2);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.angle = 0;
    }
    applyForce(force) {
      force.div(this.mass);
      this.acceleration.add(force);
    }
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(8);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
      this.applyFriction(0.05);
    }
    turn(increment){
      this.angle += increment;
    }
    thrust(){
      let x = 2 * cos(this.angle);
      let y = 2 * sin(this.angle);
      this.applyForce(createVector(x, y));
    }
    slowDown(){
      this.applyFriction(0.1);
    }
    applyFriction(coeffecient){
      let normal = 1;
      let frictionMag = coeffecient * normal;
      let friction = this.velocity.copy();
      friction = friction.mult(-1);
      friction = friction.normalize();
      friction = friction.mult(frictionMag);
      this.applyForce(friction);
    }
    display() {
      push();
      translate(this.position.x, this.position.y);
      //angleMode(DEGREES);
      rotate(this.angle + PI/2);
      beginShape();
      vertex(-this.size,this.size);
      vertex(0,-this.size);
      vertex(this.size,this.size);
      endShape(CLOSE);
      pop();
    }
    checkEdges() {
      let xLowerLimit = 0 + (this.size / 2);
      let xUpperLimit = width - (this.size / 2);
      let yLowerlimit = 0 + (this.size / 2);
      let yUpperLimit = height - (this.size / 2);
  
      if (this.position.y <= yLowerlimit) {
        this.position.y = yUpperLimit;
      } else if (this.position.y >= yUpperLimit) {
        this.position.y = yLowerlimit;
      }
  
      if (this.position.x >= xUpperLimit) {
        this.position.x = xLowerLimit;
      } else if (this.position.x <= xLowerLimit) {
        this.position.x = xUpperLimit;
      }
    }
  }
  