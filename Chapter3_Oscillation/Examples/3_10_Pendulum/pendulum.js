
class Pendulum {    
    constructor() {
      this.origin = createVector(width/2, 0);
      this.r = 400;
      this.angle = PI/4;
      this.bob = createVector(0,0);
      this.aAcceleration = 0;
      this.aVelocity = 0;
    }
    update() {
      let gravity = 1;
      let force = gravity * sin(this.angle);
      this.aAcceleration = (-1 * force) / this.r;
      this.aVelocity += this.aAcceleration;
      this.angle += this.aVelocity;

      this.bob.x = this.r * sin(this.angle) + this.origin.x;
      this.bob.y = this.r * cos(this.angle) + this.origin.y;
    }
    display() {
      line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
      circle(this.bob.x, this.bob.y, 50);
    }
  }
  