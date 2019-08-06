//global variables
var symbol; 
var symbolSize = 50;

function setup() { // ONLY LOADS ONCE
  // textSize(symbolSize); // CAN"T BE HERE, WON'T EXECUTE
  createCanvas(
    window.innerWidth, // returns width of entire width
    window.innerHeight // returns height of browser content area
  );
  //console.print(innerWidth);
  //console.print(innerHeight);
  background(0); // black background
  
  symbol = new Symbol( // x, y, velocity
    width/random(1,5), 
    0, // top of canvas (y = 0)
    random(20, 30)
  ); 
  
  
  symbol.setToRandomSymbol();
  textSize(symbolSize); // make shit bigger  
}

function draw() { // called repeatly at 60 FPS
  // prototype and class are interchangable
  background(0);
  symbol.render(); // caleld on very frame
}

function Symbol(x,y, velocity) { // x and y location on Canvas
  this.x = x
  this.y = y;
  this.value;
  this.velocity = velocity;
  
  this.setToRandomSymbol = function() {
    this.value = String.fromCharCode(
      0x30A0 + round(random(0,96)) // encode, translates to 1 2 4 4 8; 96 characters in Kata uniblock, 
      // pass thru charcode, convert to string, set to this.value
      );
  }
  // display on canvas
  this.render = function() { 
    fill(0,255,40);
    text(this.value, this.x, this.y);
    this.rain()
    this.setToRandomSymbol(); // switch symbols as falling
  }
  
  this.rain = function() { // MAKE IT RAINNN
   if (this.y >= height) { // reached bottom/end of screen 
     this.y = 0;
   }
   else {
   this.y += this.velocity; // increment y position in accordance to speed 
    }
 }
}
