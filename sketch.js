// Global variables
let t; 
let x; // X position
let y; // Y position

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
}

function draw() {
  background(0, 16);

  stroke(255);
  fill(0);
  x = width * noise(t + 15);
  y = height * noise(t + 5);
  ellipse(x + 155, y, 150, 150);
  ellipse(x, y, 150, 150);
  t += 0.005;

    fill(255);
    ellipse(x + 150, y, 25, 25);
    ellipse(x, y, 25, 25);
    

}