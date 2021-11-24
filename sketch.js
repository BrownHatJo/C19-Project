var roadImg, road;
var rockImg, rock, rocksGroup;
var car, carImg
var invisibleRock, invisibleCarGroup
gameState = "play"

function preload(){
roadImg = loadImage("road.png");
rockImg = loadImage("rock.png");
carImg = loadImage("car.png");
}

function setup() {
 createCanvas(1000, 1000)
 road = createSprite(3500, 300);
 road.addImage(roadImg);
 road.velocityX = 4;
 road.scale = 0.35

 car = createSprite(100, 550)
 car.addImage(carImg);
 car.scale = 0.6

 rocksGroup = createGroup()
 invisibleRocksGroup = createGroup()
}

function draw() {
 background(200)

 if(gameState == "play"){
     
    if(road.x > 800){
         road.x = 300
     }

     if(keyDown("right")){
         car.y = car.y - 3
     }
     if(keyDown("left")){
         car.y = car.y + 3
     }
 

 spawnRocks()

 if(car.isTouching(invisibleRocksGroup)){

    car.destroy = "true"
    gameState = "end"
 }
}

drawSprites()

  if(gameState == "end"){

    textSize(50)
    strokeWeight(5)
    stroke("red")
    fill("yellow")
    text("GAME OVER!!", 150, 300)
    background.velocityX = 0
  }
}

function spawnRocks(){
    if(frameCount % 250 === 0){
        rock = createSprite(300, 550)
        rock.scale = 0.1
        invisibleRock = createSprite(300, 550)
        invisibleRock.scale = 0.3
        invisibleRock.width = rock.width
        invisibleRock.height = 1

        rock.y = Math.round(random(525, 600))
        invisibleRock.y = rock.y

        rock.addImage(rockImg)

        rock.velocityX = -1
        invisibleRock.velocityX = -1

        rocksGroup.add(rock)
        invisibleRocksGroup.add(invisibleRock)
        car.depth = rock.depth + 1
    }
}