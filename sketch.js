var car,wall;
var deformation;

function setup() {
  createCanvas(1000, 400);
  
  car = createSprite(100,190,50,50);
  car.shapeColor ="red"
 
  wall = createSprite(900,200,20,300);
  wall.shapeColor ="grey";
  
  speed=random(55,90);
  weight=random(400,1500);
   car.velocityX = 10;
}

function draw() {

  background("lavender");
  drawSprites();

  fill("black");
  textSize(25);
  text("GLOBAL CAR SAFETY ORGANIZATION",250,50);
  
  //refer to function collide.
  collide(wall,car)
  
  textSize(15);
  text("SAFETY MEASURES TO BE TAKEN BY THE DRIVER AND THE PASSENGERS IN THE CAR", 30,320)
  text("CHECK THE CONDITION OF THE CAR",30,340);
  text("WEAR SEATBELT AFTER BOARDING A CAR",30,360);
  text("MAINTAIN A SPEED LIMIT WHILE DRIVING",30,380);
  fill("skyblue");
  textSize(25);
  text("DEFORMATION IS : "+Math.floor(deformation),30,300);
}

function deformations(){

  deformation=(0.5 * weight * speed * speed)/22500;
  
	if(deformation>180)
	{
    car.shapeColor="lavender";
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
		car.shapeColor="lightgreen";
  }
  
}
function collide(object1,object2){
  if(object1.x-object2.x===object1.width/2 + object1.width/2+10)
    {
      deformations();
      object1.velocityX = 0;
      object2.velocityX = 0;
     
    }
}
