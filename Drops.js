class Drops {
    constructor(x, y){
        var options = {
            isStatic : false,
            density : 1,
            restitution : 0.7,
            friction : 0.1
        }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, 5, 5);
        pop();
    }  
} 
