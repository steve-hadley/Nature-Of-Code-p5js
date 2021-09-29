let spring;
let bob;
let restLength = 200;

function setup() {
  createCanvas(800, 600);
  bob = new Bob(createVector(width / 2, restLength));
  spring = new Spring(createVector(width/2, 0), bob, restLength);
}

function draw() {
  background(220);

  let gravity = createVector(0, 1);
  bob.applyForce(gravity);

  if(mouseIsPressed){
    bob.position = createVector(mouseX, mouseY);
  }else{
    spring.connect(bob);
  }
  bob.update();
  spring.display();
  bob.display();
}

class Spring {
    constructor(anchor, bob, restLength) {
      this.anchor = anchor;
      this.bob = bob;
      this.k = 0.01;
      this.restLength = restLength;
    }
    connect(bob){
      let force = p5.Vector.sub(bob.position, this.anchor);
      let d = force.mag();
      let displacement = d - this.restLength;
      force.normalize();
      force.mult(-1 * this.k * displacement);
      bob.applyForce(force);
    }
    display() {
      line(this.anchor.x, this.anchor.y, this.bob.position.x, this.bob.position.y);
    }
  }
  