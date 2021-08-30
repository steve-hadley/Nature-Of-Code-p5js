// Bounce off edges
function bounceOffEdges() {
    let force = 1;
    let xLowerLimit = 0 + (this.size / 2);
    let xUpperLimit = width - (this.size / 2);
    let yLowerlimit = 0 + (this.size / 2);
    let yUpperLimit = height - (this.size / 2);

    if (this.position.y <= yLowerlimit) {
        this.velocity.y *= -force;
        this.position.y = yLowerlimit;
    } else if (this.position.y >= yUpperLimit) {
        this.velocity.y *= -force;
        this.position.y = yUpperLimit;
    }

    if (this.position.x >= xUpperLimit) {
        this.velocity.x *= -force;
        this.position.x = xUpperLimit;
    } else if (this.position.x <= xLowerLimit) {
        this.velocity.x *= -force;
        this.position.x = xLowerLimit;
    }
}

// Wrap around edges
function wrapEdges(){
    if(this.position.x < 0){
      this.position.x = width;
    }
    if(this.position.x > width){
      this.position.x = 0;
    }
    if(this.position.y < 0){
      this.position.y = height;
    }
    if(this.position.y > height){
      this.position.y = 0;
    }
  }