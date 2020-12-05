
var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);

 fixedrect= createSprite(200, 100, 50, 50);
 movingrect = createSprite(300,100,30,30);
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";

 movingrect.velocityX=-4;
fixedrect.velocityX=4;

}

function draw() {
  background(255,255,255); 
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY; 
  console.log(movingrect.x-fixedrect.x);
  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
      movingrect.velocityX=movingrect.velocityX*-1;
      fixedrect.velocityX=fixedrect.velocityX*-1;
    }
    if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
      && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
        movingrect.velocityY=movingrect.velocityY*-1;
        fixedrect.velocityY=fixedrect.velocityY*-1;
      }

  drawSprites();
}