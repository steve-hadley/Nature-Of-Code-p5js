let mover;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();
}

function draw() {
  background(220);
  mover.update();
  mover.display();
  mover.checkEdges();

  if(keyIsDown(UP_ARROW)){
    mover.thrust();
  }
  if(keyIsDown(DOWN_ARROW)){
    mover.slowDown();
  }
  if(keyIsDown(RIGHT_ARROW)){
    mover.turn(0.1);
  }
  if(keyIsDown(LEFT_ARROW)){
    mover.turn(-0.1);
  }
}