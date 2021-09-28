let spring;
let bob;
let gravity; 

function setup() {
  createCanvas(800, 600);
  bob = new Bob(createVector(width / 2, height / 2));
  spring = new Spring(createVector(width/2, height / 2), bob);
  gravity = createVector(0, 1);
}

function draw() {
  background(220);
  bob.applyForce(gravity);
  if(mouseIsPressed){
    bob.position = createVector(mouseX, mouseY);
  }
  else{
    spring.connect(bob);
  }
  bob.update();
  spring.display();
  bob.display();
}

class Spring {
    constructor(anchor, bob) {
      this.anchor = anchor;
      this.bob = bob;
      this.k = 0.05;
      this.length = 1;
    }
    connect(bob){
      let force = p5.Vector.sub(bob.position, this.anchor);
      let d = force.mag();
      let displacement = d - this.length;
      force.normalize();
      force.mult(-1 * this.k * displacement);
      bob.applyForce(force);
    }
    display() {
      line(this.anchor.x, this.anchor.y, this.bob.position.x, this.bob.position.y);
    }
  }
  