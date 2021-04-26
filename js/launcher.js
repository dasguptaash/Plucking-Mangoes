class launcher{
    constructor(a,b){
        var options = {
            bodyA : a,
            pointB : b,
            length : 30,
            stiffness : 0.004
        }
        this.pointB = b;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
     
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointC = this.bodyA.position;
            var pointD = this.pointB;
            strokeWeight(4);
            line(pointC.x,pointC.y,pointD.x,pointD.y);
        }
    }
}