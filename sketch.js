//Move mouse on canvas to fill the circles with random colors

let circles = [];
let rows = 10;
let columns = 10;
let circleSize = 40;

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let x = j * circleSize + circleSize / 2;
      let y = i * circleSize + circleSize / 2;
      circles.push({ x: x, y: y, color: color(255) });
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, circleSize);
  }
}

function mouseMoved() {
  for (let i = 0; i < circles.length; i++) {
    let d = dist(mouseX, mouseY, circles[i].x, circles[i].y);
    if (d < circleSize / 2) {
      circles[i].color = color(random(255), random(255), random(255));
    } else {
      circles[i].color = color(255);
    }
  }
}
