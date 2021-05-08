var bg,canvas,tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImg1=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg2=loadAnimation("images/cat4.png")
    tomImg3=loadAnimation("images/cat1.png")
    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,400)
tom.addAnimation("tomsleeping",tomImg3)
tom.scale=0.2

jerry=createSprite(400,400)
jerry.addAnimation("jerrystanding",jerryImg1)
jerry.scale=0.2
}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < tom.width/2+jerry.widht/2){
    tom.velocityX=0;
    tom.x=400;
    tom.loadAnimation("tomfinal",tomImg3)
    tom.changeAnimation("tomfinal")
    jerry.addAnimation("jerryfinal",jerryImg3)
    jerry.changeAnimation("jerryfinal")
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
tom.addAnimation("tomrunning",tomImg1)
tom.changeAnimation("tomrunning");

}

}
