
class Bob {
    constructor(position) {
      this.size = 50;
      this.mass = 1;
      this.position = position;
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.damping = 0.98;
    }
    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acceleration.add(f);
    }
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.mult(this.damping);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    display() {
      circle(this.position.x, this.position.y, this.size);
    }
  }
  