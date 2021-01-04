class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.004
        }
        this.bodyA= bodyA;
        this.pointB = pointB;
    this.Launcher=Constraint.create(options);
    World.add(world,this.Launcher);
    }
    attach(body){
        this.Launcher.bodyA=body;
    }

    fly(){
        this.Launcher.bodyA=null
    }
    display(){
        if(this.Launcher.bodyA){
        stroke("white")
    var pointA=this.Launcher.bodyA.position
    var pointB=this.Launcher.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
       }
    }
}









  