
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
      this.velocity.limit(10);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    display() {
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    isInside(zone){
        if(this.position.x > zone.position.x && this.position.y > zone.position.y && this.position.x < zone.position.x + zone.size && this.position.y < zone.position.y + zone.size){
            return true;
        } else {
            return false;
        }
    }
    checkEdges() {
      let force = 1;
      let xLowerLimit = 0 + (this.size / 2);
      let xUpperLimit = width - (this.size / 2);
      let yLowerlimit = 0 + (this.size / 2);
      let yUpperLimit = height - (this.size / 2);
  
      // Bounce off edges
      if (this.position.y <= yLowerlimit) {
        this.velocity.y *= -force;
        this.position.y = yLowerlimit;
      } else if (this.position.y >= yUpperLimit) {
        this.velocity.y *= -force;
        this.position.y = yUpperLimit;
      }
  
      if (this.position.x >= xUpperLimit) {
        this.velocity.x *= -force;
        this.position.x = xUpperLimit;
      } else if (this.position.x <= xLowerLimit) {
        this.velocity.x *= -force;
        this.position.x = xLowerLimit;
      }
    }
  }
  