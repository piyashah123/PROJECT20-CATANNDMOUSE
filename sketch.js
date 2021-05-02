var bg,canvas,tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImg1=loadAnimation("image/cat2.png","image/cat3.png")
    tomImg2=loadAnimation("image/cat4.png")
    tomImg3=loadAnimation("image/cat1.png")
    jerryImg1=loadAnimation("image/mouse1.png")
    jerryImg2=loadAnimation("image/mouse2.png","image/mouse3.png")
    jerryImg3=loadAnimation("image/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,600)
tom.addAnimation("tomsleeping",tomImg3)
tom.scale=0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
