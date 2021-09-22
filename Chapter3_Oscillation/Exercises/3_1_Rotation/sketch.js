let mover;
let rotation = 0;
let size;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  size = createVector(200, 20);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(rotation);
  rect(0 - (size.x / 2), 0 - (size.y / 2), size.x, size.y);
  rotation++;
}