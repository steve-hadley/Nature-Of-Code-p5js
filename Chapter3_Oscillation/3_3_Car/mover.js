
class Mover {
    constructor() {
      this.size = createVector(60, 30);
      this.mass = 1;
      this.position = createVector(width / 2, height / 2);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
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
    }

    display() {
      let h = this.velocity.copy();
      h.normalize();
      let a = atan2(h.y, h.x);
      push();
      translate(this.position.x, this.position.y);
      rotate(a);
      rect(0, 0, this.size.x, this.size.y);
      pop();
    }

    checkEdges() {
      let xLowerLimit = 0 + (this.size.x / 2);
      let xUpperLimit = width - (this.size.x / 2);
      let yLowerlimit = 0 + (this.size.y / 2);
      let yUpperLimit = height - (this.size.y / 2);
  
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
  