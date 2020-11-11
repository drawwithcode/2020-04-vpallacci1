var myCanvas;

var imm0;

var yesButton;
var notButton;

function preload() {
  imm0 = loadImage("./assets/star.png");
  }

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("#7600ff");

 yesButton = createButton("YES");
 yesButton.position(580);
 yesButton.mousePressed(goodGuy);

 notButton = createButton("NO");
 notButton.position(720);
 notButton.mousePressed(badGuy);
}

function draw() {
	image(imm, pmouseX, pmouseY, 10, 10);
}


function badGuy() {
  window.open("roomNo.html", "_self");
}

function goodGuy() {
  window.open("roomYes.html", "_self");
}
