
class Mover {
    constructor() {
      this.size = 50;
      this.mass = 1;
      this.terminalVelocity = 7.5;
      this.position = createVector(width / 2, height / 2);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
    applyForce(force) {
      force.div(this.mass);
      this.acceleration.add(force);
    }
    slowDown(){
      let velocity = this.velocity.copy();
      let slowDownForce = velocity.mult(-1);
      slowDownForce.normalize();
      slowDownForce.mult(0.1);
      this.applyForce(slowDownForce);
    }
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.terminalVelocity);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    display() {
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    wrapEdges(){
      if(this.position.x < 0){
        this.position.x = width;
      }
      if(this.position.x > width){
        this.position.x = 0;
      }
      if(this.position.y < 0){
        this.position.y = height;
      }
      if(this.position.y > height){
        this.position.y = 0;
      }
    }
  }
  