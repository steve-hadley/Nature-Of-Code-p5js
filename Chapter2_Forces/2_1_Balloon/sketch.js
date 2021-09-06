let balloon;

function setup() {
  createCanvas(800, 600);
  balloon = new Balloon();
}

function draw() {
  background(220);

  // Apply gravity
  let gravity = createVector(0, 0.01);
  balloon.applyForce(gravity);

  // Apply helium(?) force
  balloon.applyForce(createVector(0, -0.1));

  // Apply wind force
  let windStrength = 1;
  let windForce;
  if (keyIsDown(LEFT_ARROW)) {
    windForce = createVector(-0.1, 0);
  } else if (keyIsDown(RIGHT_ARROW)) {
    windForce = createVector(0.1, 0);
  } else {
    windForce = createVector(0, 0);
  }
  windForce.normalize();
  windForce.mult(windStrength);
  balloon.applyForce(windForce);

  balloon.update();
  balloon.display();
  balloon.checkEdges();
}

class Balloon {
  constructor() {
    this.size = 50;
    this.mass = 1;
    this.position = createVector(width / 2, 100);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }
  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(3);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  display() {
    line(this.position.x, this.position.y, this.position.x, this.position.y + 100);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
  checkEdges() {
    let xLowerLimit = 0 + (this.size / 2);
    let xUpperLimit = width - (this.size / 2);
    let yUpperLimit = 0 + (this.size / 2);

    // Bounce off edges
    if (this.position.y <= yUpperLimit) {
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
