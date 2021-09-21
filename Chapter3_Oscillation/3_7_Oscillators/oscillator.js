
class Oscillator {
    constructor(amplitude, velocity) {
      this.size = 50;
      this.angle = createVector(0,0);
      this.velocity = velocity;
      this.amplitude = amplitude;
    }
    oscillate() {
      this.angle.add(this.velocity);
    }
    display() {
      let x = sin(this.angle.x) * this.amplitude.x;
      let y = sin(this.angle.y) * this.amplitude.y;

      push();
      translate(width / 2, height / 2);
      line(0,0, x, y);
      ellipse(x, y, this.size, this.size);
      pop();
    }
  }
  