let mover;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();
}

function draw() {
  background(220);
  mover.update();
  mover.display();
  mover.wrapEdges();

  let steerX, steerY = 0;

  if(keyIsDown(UP_ARROW)){
    steerY = -0.1;
  }
  if(keyIsDown(DOWN_ARROW)){
    steerY = 0.1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    steerX = 0.1;
  }
  if(keyIsDown(LEFT_ARROW)){
    steerX = -0.1;
  }
  if(keyIsDown(32)){
    mover.slowDown();
  }

  let steeringForce = createVector(steerX, steerY);
  steeringForce.mult(10);
  mover.applyForce(steeringForce);

}