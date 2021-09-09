let movers = [];;
let cannon;
let mouseDirection;

function setup() {
  createCanvas(1920, 1080);
  cannon = new Cannon();
  mouseDirection = createVector(mouseX, mouseY);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  movers.forEach(element => {
    if(element.position.y <= (height - 20)){
      let gravity = createVector(0, 0.1);
      element.applyForce(gravity);
    }
  
    element.update();
    element.display();
  });

  // Calculate mouse direction vector
  let mouseVector = createVector(mouseX, mouseY);
  mouseDirection = mouseVector.sub(cannon.position);

  let angle = atan2(mouseDirection.y, mouseDirection.x);
  translate(cannon.position);
  rotate(angle);
  cannon.display();
}

function mouseClicked() {
  let mover = new Mover();
  movers.push(mover);
  let cannonForce = mouseDirection.normalize();
  mouseDirection.mult(3);
  mover.applyForce(cannonForce.mult(5));
}

class Cannon{
  constructor(){
    this.size = createVector(100, 80);
    this.position = createVector(this.size.x / 2, height - this.size.y / 2);
  }
  display(){
    rect(0, 0, this.size.x, this.size.y);
  }
}