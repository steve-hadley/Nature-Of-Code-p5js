let pendulum;

function setup() {
  createCanvas(800, 600);
  pendulum = new Pendulum();
}

function draw() {
  background(220);
  pendulum.update();
  pendulum.display();
}