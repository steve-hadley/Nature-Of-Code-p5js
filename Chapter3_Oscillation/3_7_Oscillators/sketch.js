let oscillators = [];
let amplitude;
let velocity;

function setup() {
  createCanvas(800, 600);
  amplitude = createVector(200,200);
  velocity = createVector(-0.02, 0.05);
  oscillators.push(new Oscillator(amplitude, velocity));
  velocity = createVector(-0.02, -0.05);
  oscillators.push(new Oscillator(amplitude, velocity));
  velocity = createVector(0.02, 0.05);
  oscillators.push(new Oscillator(amplitude, velocity));
  velocity = createVector(0.02, -0.05);
  oscillators.push(new Oscillator(amplitude, velocity));
}

function draw() {
  background(220);
  oscillators.forEach(oscillator => {
    oscillator.oscillate();
    oscillator.display();
  });
}
