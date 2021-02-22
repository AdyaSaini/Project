var drops;

function preload(){
    
}

function setup(){
   createCanvas(500,690);

   drops = createSprite(300,300);
    
}

function draw(){
   background("black");
   drops.display();
}   

