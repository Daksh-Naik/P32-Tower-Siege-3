class SlingShotT2 {
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null; 
    }
 
    comeBack(body1) {
        this.sling.bodyA = body1;
    }

    display(){
              
        push();
        if (this.sling.bodyA) {

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }
    }
        
}

