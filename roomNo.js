const urlString = window.location.href;
const url = new URL(urlString);

var retryButton;

var p1;

function setup() {
createCanvas(windowWidth, windowHeight);
background("black");

retryButton = createButton("homepage");
retryButton.mousePressed(retryX);
retryButton.position(680,400);
}

function mouseMoved() {
  p1 = createP(":(");
  p1.position(pmouseX, pmouseY);

}

function retryX() {
  window.open("index.html", "_self");
}
