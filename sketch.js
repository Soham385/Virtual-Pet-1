//Create variables here
var dog;
var happyDog;
var database;
var foodS ;
var Food ; 
var foodStock;
var dogEat = "images/dogImg.png";
var dogHappy = "images/dogImg1.png";

function preload()
{
  //load images here
  
}

function setup() {
  createCanvas(500, 500);
  Database = firebase.database();
  dog = createSprite(250,300,100,100)
  dog.addImage(dogEat)
}


function draw() {  
    background(46,139,87)

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy)
    }
    dog.addImage(dogEat)
  drawSprites();
  //add styles here
  text("foodStock :" - writeStock)
}
function foodStocks(){
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
   if(x>=0){
     x=0
   }else{
     x=x-1;
   }


  database.ref('/').update({
    Food:x 
  })
}
