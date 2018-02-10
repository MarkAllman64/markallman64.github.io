function setup() {
  createCanvas(600, 600);
}

function draw() {
  var c = color('magenta');
fill(c); // Use 'c' as fill color
  ellipse(100, 100, 50, 50);
  rect(mouseX, mouseY, 60, 60);
}
