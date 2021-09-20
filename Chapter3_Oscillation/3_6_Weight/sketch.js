let position;
let amplitude = 100;
let period = 120;

function setup() {
  createCanvas(800, 600);
  position = createVector(0, 0);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  position.y = amplitude * cos(TWO_PI * frameCount / period);
  line(0, -height / 2 ,position.x, position.y);
  ellipse(position.x, position.y, 100, 100);
}