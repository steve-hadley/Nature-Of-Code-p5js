
class Mover {
    constructor() {
      this.size = 50;
      this.mass = 1;
      this.position = createVector(width / 2, 100);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
    applyForce(force) {
      force.div(this.mass);
      this.acceleration.add(force);
    }
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    display() {
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    checkEdges() {
      let xLowerLimit = 0 + (this.size / 2);
      let xUpperLimit = width - (this.size / 2);
      let yLowerlimit = 0 + (this.size / 2);
      let yUpperLimit = height - (this.size / 2);
  
      // Bounce off edges
      if (this.position.y <= yLowerlimit) {
        this.velocity.y *= -1;
        this.position.y = yLowerlimit;
      } else if (this.position.y >= yUpperLimit) {
        this.velocity.y *= -1;
        this.position.y = yUpperLimit;
      }
  
      if (this.position.x >= xUpperLimit) {
        this.velocity.x *= -1;
        this.position.x = xUpperLimit;
      } else if (this.position.x <= xLowerLimit) {
        this.velocity.x *= -1;
        this.position.x = xLowerLimit;
      }
    }
  }
  