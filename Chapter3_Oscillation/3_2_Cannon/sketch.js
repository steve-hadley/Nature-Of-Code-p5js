let mover;

function setup() {
  createCanvas(1920, 1080);
  mover = new Mover();

  let cannonForce = createVector(1, -2);
  mover.applyForce(cannonForce.mult(5));
}

function draw() {
  background(220);
  if(mover.position.y <= (height - 20)){
    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);
  }

  mover.update();
  mover.display();
}