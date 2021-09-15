let r = 0;
let theta = 0;
let size = 10;
let speed = 0.05;
let radiusStep = 0.3;

function setup() {
  createCanvas(800, 600);
  fill(0);
}

function draw() {
  let x = r * cos(theta);
  let y = r * sin(theta);
  translate(width/2, height /2);
  ellipse(x, y, size, size);
  theta += speed;
  r += radiusStep;
}