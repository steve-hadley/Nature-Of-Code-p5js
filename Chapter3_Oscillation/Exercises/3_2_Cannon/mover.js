
class Mover {
    constructor() {
      this.size = createVector(50, 50);
      this.mass = 1;
      this.position = createVector(100 / 2, height - 80 / 2);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
    applyForce(force) {
      force.div(this.mass);
      this.acceleration.add(force);
    }
    update() {
      // Friction and bounce off ground
      if(this.position.y > (height - (this.size.y / 2))){
        
        this.position.y = height - (this.size.y / 2) - 1;

        // Friction
        let c = 0.1;
        let normal = 1;
        let frictionMag = c * normal;
        let friction = this.velocity.copy();
        friction = friction.mult(-1);
        friction = friction.normalize();
        friction = friction.mult(frictionMag);
        this.applyForce(friction);

        // Bounce
        if(this.velocity.mag() > 2){
          this.velocity.y *= -0.5;
        }
      }

      // Bounce of wall
      if(this.position.x > width - this.size.x ){
        this.velocity.x *= -1;
      }

      this.velocity.add(this.acceleration);
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
  }