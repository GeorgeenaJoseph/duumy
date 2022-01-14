var zombie , zombieIdle,zombieDead
var boy , boyIdle , boyDead 
var gameState="PLAY"
var treasure , treasureImg 
var count=0;

function preload(){
 zombieIdle=loadAnimation("Idle (15).png","Idle (14).png","Idle (13).png");
 boyIdle = loadAnimation("Idle (7).png","Idle (7).png","Idle (12).png"); 
 
 boyDead = loadAnimation("Dead (8).png","Dead (9).png","Dead (10).png")
 zombieDead = loadAnimation("Dead (2).png","Dead (1).png","Dead (4).png")
 
 treasureImg = loadImage ("Diamond pic.jpg")
 bgImg = loadImage("CLIPART.jpg")
}

function setup() {
createCanvas(windowWidth,windowHeight);


boy = createSprite(320,320,50,50);
boy.debug=true;
boy.setCollider("circle",-80,0,150)
//boy.addAnimation("boy", boyDead);
boy.addAnimation("boy",boyIdle);
//boy.velocityY = 1;
boy.scale=0.3;

zombiesGroup= new Group();
treasuresGroup=new Group();

}

function draw() {
background(bgImg)
if (gameState==="PLAY"){

    
    if(keyDown("SPACE")) {
      boy.velocityY = -10;
    }
   // boy.velocityY = boy.velocityY+0.5;
    if(keyDown("right_arrow")){
      boy.x = boy.x + 3
    }

    if(keyDown("left_arrow")){
      boy.x = boy.y - 3
    }

    if(boy.isTouching(zombiesGroup) && count<3)
    {
      zombiesGroup.destroyEach();
      count+=1;
      textSize(30)
      console.log(count)
      
    }

    if(count===3)
      {
        text("You have lost the game",500,700)
      }
    

spawnZombies () ;

spawnDiamonds () ;

drawSprites() ;
 
  }
}


function spawnZombies () {
  if(frameCount % 200 === 0){
var randx=Math.round(random(boy.x+100,1000))
var randy=Math.round(random(20,700))

zombie = createSprite(randx,randy,50,50);
zombie.addAnimation("zombie",zombieDead);
//zombie.addAnimation("zombie",zombieIdle);
//zombie.velocityX = -2;
zombie.scale=0.3
//zombie.lifetime = 800;
zombiesGroup.add(zombie);



  }
}

function spawnDiamonds () {
if (frameCount % 1000=== 0)
{
treasure = createSprite (100,300,20,20);
treasure.addImage("treasure", treasureImg)
treasure.velocityX = -2;
treasure.scale=0.4;
treasure.lifetime = 800;
treasuresGroup.add(treasure)
}
}

