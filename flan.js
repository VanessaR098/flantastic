class Flan {
  constructor(_x, _y, _shk) {
    this.x = _x;
    this.y = _y;
    this.shk = _shk;
  }

  display() {

    push();
    noStroke();
    //syrup below flan
    fill(102, 34, 0);
    ellipse(this.x + this.shk, this.y + 44, 60, 20);

    //flan 
    fill(255, 217, 102);
    rect((this.x - 31) + this.shk, this.y, 62, 45, 20, 20, 10, 10);
    fill(255, 217, 102);
    ellipse(this.x + this.shk, this.y + 40, 59, 20);

    //top of flan
    fill(153, 51, 0);
    ellipse(this.x + this.shk, this.y + 5, 55, 20);
    pop();


  }

  shake() {
    this.shk += random(-3, 3);

    if (this.shk > 3 || this.shk < -3) {
      this.shk = 0;
    }
  }


}