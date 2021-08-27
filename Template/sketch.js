let mover;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();

  let randomForce = p5.Vector.random2D();
  mover.applyForce(randomForce.mult(5));
}

function draw() {
  background(220);
  mover.update();
  mover.display();
  mover.checkEdges();
}