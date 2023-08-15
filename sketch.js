var play,end;
var game=play;
var bow , arrow,  scene,redballoongroup,greenballoongroup,blueballoongroup,pinkballoongroup,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redballoongroup=new Group();
  greenballoongroup=new Group();
  blueballoongroup=new Group();
  pinkballoongroup=new Group();
  arrowGroup= new Group();


  score = 0    
}

function draw() {
//Text("score: "+score,350,300);
console.log(score);
  if (game===play){
  background(0);

  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")){
    createArrow();
  }

  if(arrowGroup.isTouching(redballoongroup)){
    score=score+5;
    redballoongroup.destroyEach();
    arrowGroup.destroyEach();
  }
  if(arrowGroup.isTouching(greenballoongroup)){
    score=score+3;
    greenballoongroup.destroyEach();
    arrowGroup.destroyEach();
  }
  if(arrowGroup.isTouching(pinkballoongroup)){
    score=score+1;
    pinkballoongroup.destroyEach();
    arrowGroup.destroyEach();
  }
  if(arrowGroup.isTouching(blueballoongroup)){
    score=score+2;
    blueballoongroup.destroyEach();
    arrowGroup.destroyEach();
  }
   
  //criando inimigos continuamente
  var select_balloon=Math.round(random(1,4));
  
  if (World.frameCount % 60 == 0) {
   switch(select_balloon ){
    case 1:redSpawner();
    break;
    case 2:blueSpawner();
    break;
    case 3:greenSpawner();
    break;
    case 4:pinkSpawner();
    break;
    default:break;
  }}

 }
  if(score===30){
    game=end;
     if (game===end){
  redballoongroup.setVelocityXEach(0);
  blueballoongroup.setVelocityXEach(0);
  greenballoongroup.setVelocityXEach(0);
  pinkballoongroup.setVelocityXEach(0);
  arrowGroup.setVelocityXEach(0);
 }
  }
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function redSpawner() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redballoongroup.add(red);
}

function blueSpawner() {
  var blue =createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueballoongroup.add(blue);
}

function greenSpawner() {
  var green =createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenballoongroup.add(green);
}

function pinkSpawner() {
  var pink =createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1.2;
  pinkballoongroup.add(pink);
}
