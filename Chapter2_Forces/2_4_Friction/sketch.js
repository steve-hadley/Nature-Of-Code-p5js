let mover;
let frictionZones = [];
let xOff = 0;
let yOff = 10000;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();

  let randomForce = p5.Vector.random2D();
  mover.applyForce(randomForce.mult(5));

  for (let i = 0; i < 6; i++) {
    frictionZones[i] = new FrictionZone(createVector(random(0, width), random(0, height)), 100, 1);
  }
}

function draw() {
  background(220);
  let noiseX = noise(xOff);
  let noiseY = noise(yOff);
  noiseX = map(noiseX, 0, 1, -1, 1);
  noiseY = map(noiseY, 0, 1, -1, 1);
  let noiseForce = createVector(noiseX, noiseY);
  xOff += 1;
  yOff += 1;
  noiseForce = noiseForce.normalize();
  console.log(noiseForce);
  mover.applyForce(noiseForce);

  mover.update();
  frictionZones.forEach(zone => {
    zone.display();
  });
  mover.display();
  mover.checkEdges();

  CheckFriction();
}

function CheckFriction() {
  frictionZones.forEach(zone => {
    if (mover.isInside(zone)) {
      let force = zone.calculateForce(mover.velocity);
      mover.applyForce(force);
    }
  });
}

class FrictionZone {
  constructor(position, size, strength) {
    this.position = position;
    this.size = size;
    this.strength = strength;

  }
  display() {
    rect(this.position.x, this.position.y, this.size, this.size);
  }
  calculateForce(velocity){
    let c = 0.0001;
    let normal = 1;
    let frictionMag = c * normal;    
    let force = velocity.normalize(velocity.mult(-1));
    return force.mult(frictionMag);
  }
}