// Mover
let mover;
// Friction zones
let frictionZones = [];
// Noise variables
let xOff = 0;
let yOff = 10000;

function setup() {
  createCanvas(800, 600);
  mover = new Mover();

  // Create friction zones
  for (let i = 0; i < 10; i++) {
    frictionZones[i] = new FrictionZone(createVector(random(0, width), random(0, height)), 100, 1);
  }

  // Apply noise force
  mover.applyForce(calculateNoise().mult(100));
}

function draw() {
  background(220);
  mover.update();
  mover.wrapEdges();
  CheckFriction();
  // Display
  frictionZones.forEach(zone => {
    zone.display();
  });
  mover.display();
}

function calculateNoise(){
  let noiseX = noise(xOff);
  let noiseY = noise(yOff);
  noiseX = map(noiseX, 0, 1, -1, 1);
  noiseY = map(noiseY, 0, 1, -1, 1);
  let noiseForce = createVector(noiseX, noiseY);
  xOff += 0.01;
  yOff += 0.01;
  return noiseForce;
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
    // Calculate friction
    let c = 0.03;
    let normal = 1;
    let frictionMag = c * normal;

    // Get reverse velocity
    let friction = velocity.copy();
    friction.mult(-1);
    friction.normalize();

    return friction.mult(frictionMag);
  }
}