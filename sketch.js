
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var haha;
var crumpledBall;
var fixedthefloor;







function preload() {

}

function setup() {
	createCanvas(1300, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	haha = new ew(1180, 690)
	crumpledBall = new wasteoftrees(100, 680, 20);
	fixedthefloor = new land(650, 695, 1300, 10)

	Engine.run(engine);



}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();

	haha.display();
	crumpledBall.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledBall.body, crumpledBall.body.position, { x: 22, y: -22 });
	}
}



