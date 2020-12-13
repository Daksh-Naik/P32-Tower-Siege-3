class RBox {
    constructor(x, y, width, height) {
      var RBoxOptions = {
          'restitution': 0.03,
          'fricion': 2.0,
          'density': 1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, RBoxOptions);
      this.width = width;
      this.height = height;
      this.visibility = 255;

      World.add(world, this.body);
    }

  display() {
    var pos = this.body.position;

   
    if (this.body.speed < 3) {

      push();
      rectMode(CENTER);
      fill(color(255, 0, 0));
      rect(pos.x, pos.y, this.width, this.height);
      pop();
  
      } else {
        push();
        this.visibility = this.visibility-5;
        World.remove(world, this.body);
        tint(255, this.visiblity);
      }
  
  }

  Rscore() {
    if (this.visibility < 0 && this.visibility > -105) {
    score = score + 3;
  }
}


}