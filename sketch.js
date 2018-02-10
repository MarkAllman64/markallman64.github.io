var xLocation = 100;
var yLocation = 100;
var xSpeed = 0;
var ySpeed = 0;


function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    xSpeed = xSpeed + 1;
  }
  if (keyCode == UP_ARROW) {
    xSpeed = xSpeed - 1;
  }
  if (keyCode == LEFT_ARROW) {
    ySpeed = ySpeed + 1
  }
  if (keyCode == RIGHT_ARROW) {
    ySpeed = ySpeed - 1
  }
}

function draw() {
  background(221, 28, 119);
  stroke('blue');
  strokeWeight(20);
   var c = color('magenta');
   fill(c);
  ellipse(xLocation, yLocation, 50, 50);
   rect(xLocation - 30, xLocation + 30, 60, 60);

xLocation = xLocation + xSpeed
yLocation = yLocation + ySpeed

textSize (18);
strokeWeight(2);
text(xSpeed, 100, 20);
text(ySpeed, 150, 20);
}
