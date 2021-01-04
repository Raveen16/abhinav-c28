class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.8
           
        }
    this.image=loadImage("stone.png")
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display(){
        var pos =this.body.position;
        fill(255);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
    
    };