var dog,happyDog,database,foodS,foodStock;
var dog_image,happyDog_image;

function preload() 
{
  dog_image = loadImage("images/dogImg.png");
  happyDog_image = loadImage("images/dogImg1.png");
}

function setup() 
{
  database = firebase.database();
  createCanvas(500,500);

  dog = createSprite(250,250);
  dog.addImage("Dog", dog_image);
  dog.addImage("Happy",happyDog_image);
  dog.scale=0.4;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock,showError);
}

function draw() 
{
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) 
  {
    writeStock(foodS);
    dog.addImage(happyDog_image);
  }
  drawSprites();
}

function readStock(data) 
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref("Food").update(
    {
      Food:x
    }
  )
} 

function showError() 
{
  console.log("Error!!!");
}
