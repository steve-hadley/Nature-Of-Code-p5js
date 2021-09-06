let mover;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();

  let randomForce = p5.Vector.random2D();
  mover.applyForce(randomForce.mult(10));
}

function draw() {
  background(220);
  mover.invisibleForce();
  mover.update();
  mover.display();
}

class Mover {
  constructor() {
    this.size = 50;
    this.mass = 1;
    this.position = createVector(width - 100, 100);
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
    this.velocity.limit(5);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  display() {
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
  invisibleForce() {
    let pos = this.position;

    let forceX;
    let forceY;

    if (pos.x < width / 2) {
      forceX = width - pos.x;
      forceX = forceX / width;
      forceX = 1 - forceX;

    } else {
      forceX = pos.x;
      forceX = forceX / width;
    }

    if (pos.y < height / 2) {
      forceY = height - pos.y;
      forceY = forceY / height;
      forceY = 1 - forceY;

    } else {
      forceY = pos.y;
      forceY = forceY / height;
    }

    forceX = map(forceX, 0, 1, -1, 1);
    forceY = map(forceY, 0, 1, -1, 1);

    let force = createVector(forceX, forceY);
    force = force.mult(-1);
    this.applyForce(force.div(11));


  }
}
