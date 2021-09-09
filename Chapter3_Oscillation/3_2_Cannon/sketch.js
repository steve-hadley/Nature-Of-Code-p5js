let movers = [];

function setup() {
  createCanvas(1920, 1080);
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

  translate(90, height - 140);
  rotate(PI / 3.0);
  rect(0, 0, 100, 100);

}

function mouseClicked() {
  let mover = new Mover();
  movers.push(mover);
  let cannonForce = createVector(1, -2);
  mover.applyForce(cannonForce.mult(5));
}