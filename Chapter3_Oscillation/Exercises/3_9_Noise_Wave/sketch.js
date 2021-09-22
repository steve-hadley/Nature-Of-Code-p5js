let startAngle = 0;
let angleVel = 0.03;
let angle = 0;

function setup() {
  createCanvas(800, 600);
}

function draw(){
  background(51);

  startAngle += 0.015;
  angle = startAngle;

  for (let x = 0; x <= width; x+=10) {
    let y = map(noise(angle), 0, 1, 0, height);
    ellipse(x,y,50,50);
    angle += angleVel;
  }
}
