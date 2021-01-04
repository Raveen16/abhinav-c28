
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy1,tree1,stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var line1;
var LauncherObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2, 560, width, 10 );
boy1 = new Boy(200,530,150,150);
tree1 = new Tree(580,350,450,450);
stone1 = new Stone(155,490,20,20);
mango1 = new Mango(580,330,50,50);
mango2 = new Mango(600,280,50,50);
mango3 = new Mango(540,300,60,60);
mango4 = new Mango(580,200,60,60);
mango5 = new Mango(660,230,50,50);
mango6 = new Mango(700,290,50,50);
mango7 = new Mango(480,280,60,60);
line1 = new Launcher(stone1.body,{x:155,y:490})

Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(20);

ground.display();
  boy1.display();
 tree1.display();
 stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
line1.display();
}


function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	line1.fly()
}


 function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }