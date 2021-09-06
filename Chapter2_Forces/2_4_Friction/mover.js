
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
      this.velocity.limit(8);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    display() {
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
    isInside(zone){
        let s = this.size / 2;
        if(this.position.x + s > zone.position.x && this.position.y + s > zone.position.y && this.position.x - s < zone.position.x + zone.size && this.position.y - s < zone.position.y + zone.size){
            return true;
        } else {
            return false;
        }
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
  