class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.p = Constraint.create(options);
        World.add(world, this.p);
    }
    fly(){
        this.p.bodyA = null;
    }

    display(){
        if(this.p.bodyA){
            var pointA = this.p.bodyA.position;
            var pointB = this.pointB;
               line(pointA.x,pointA.y,pointB.x,pointB.y)
        
        }
    }
    
}