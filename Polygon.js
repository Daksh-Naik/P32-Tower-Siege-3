class Polygon {
    constructor(x, y, radius) {
        var PolygonOptions = {
            'restitution' : 0.3,
            'density' : 1.0,
            'friction' : 1.0
        }
        this.body = Matter.Bodies.circle(x, y, radius, PolygonOptions);
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(color(0, 255, 0));
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);

        pop();

    }
}