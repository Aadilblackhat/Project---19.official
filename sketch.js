var tony,plasma,space;
var tonyImg,plasmaImg,spaceImg,gameOverImg;
var goneSound;
var distance = 0;
var gameState = "play";

function preload(){
  spaceImg = loadImage("Background.png");
  tonyImg = loadImage("Protaganist.png");
  plasmaImg = loadAnimation("Zuum.png","Zuum-2.png");
  gameOverImg = loadImage("Dead.png");
  goneSound = loadSound("killer.mp3");
  gameOverSound = loadSound("gameOver.wav");
}

function setup() {
 
  createCanvas(400,400);
  goneSound.loop();
  
  space = createSprite(200,200);
  space.addImage("space",spaceImg);
  space.scale = 4;
  space.velocityY = 3;

  tony = createSprite(200,250,20,20);
  tony.addImage("tony",tonyImg);
  tony.scale = 0.5;

}

function draw() {

  background(0);
  if (gameState == "play") {
    if (keyDown("left_arrow")){
      tony.x = tony.x - 5;
    }

    if (keyDown("right_arrow")) {
      tony.x = tony.x + 5;
    }

    if (space.y > 400){
     space.y = 300
    }

  spawnPlasma();

  //if(tony.isTouching(plasma)){
    //tony.destroy();
    //gameState == "end"
  //}

  space.visible = true;

  drawSprites();
 }

 if(gameState == "end"){
  tony.changeImage("dead",gameOverImg);
  goneSound.loop();
 }
 
}

function spawnPlasma(){
 if(World.frameCount % 180 == 0){
  plasma.addAnimation(plasmaImg);
  plasma.scale = 0.11;
  plasma.velocityY = 3;
  plasma.lifetime = 140;
 }
}
