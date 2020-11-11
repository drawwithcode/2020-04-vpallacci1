const urlString = window.location.href;
const url = new URL(urlString);

var myCanvas;

var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;
var button10;
var button11;
var button12;

var imm1;
var imm2;
var imm3;
var imm4;
var imm5;
var imm6;
var imm7;
var imm8;
var imm9;
var imm10;
var imm11;
var imm12;

function preload() {
  imm1 = loadImage("./assets/ari.png");
  imm2 = loadImage("./assets/tau.png");
  imm3 = loadImage("./assets/gem.png");
  imm4 = loadImage("./assets/can.png");
  imm5 = loadImage("./assets/leo.png");
  imm6 = loadImage("./assets/vir.png");
  imm7 = loadImage("./assets/lib.png");
  imm8 = loadImage("./assets/sco.png");
  imm9 = loadImage("./assets/sag.png");
  imm10 = loadImage("./assets/cap.png");
  imm11 = loadImage("./assets/pis.png");
  imm12 = loadImage("./assets/acq.png");
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("#7600ff");

  image(imm1, 150, 250, 150, 150);
  button1 = createButton("ARIES");
  button1.position(150, 410);
  button1.mousePressed(roomAri);

  image(imm2, 350, 250, 150, 150);
  button1 = createButton("TAURUS");
  button1.position(350, 410);
  button1.mousePressed(roomTau);

  image(imm3, 550, 250, 150, 150);
  button1 = createButton("GEMINI");
  button1.position(550, 410);
  button1.mousePressed(roomGem);

  image(imm4, 750, 250, 150, 150);
  button1 = createButton("CANCER");
  button1.position(750, 410);
  button1.mousePressed(roomCan);

  image(imm5, 950, 250, 150, 150);
  button1 = createButton("LEO");
  button1.position(950, 410);
  button1.mousePressed(roomLeo);

  image(imm6, 1150, 250, 150, 150);
  button1 = createButton("VIRGO");
  button1.position(1150, 410);
  button1.mousePressed(roomVir);

  image(imm7, 150, 480, 150, 150);
  button1 = createButton("LIBRA");
  button1.position(150, 640);
  button1.mousePressed(roomLib);

  image(imm8, 350, 480, 150, 150);
  button1 = createButton("SCORPIO");
  button1.position(350, 640);
  button1.mousePressed(roomSco);

  image(imm9, 550, 480, 150, 150);
  button1 = createButton("SAGITTARIUS");
  button1.position(550, 640);
  button1.mousePressed(roomSag);

  image(imm10, 750, 480, 150, 150);
  button1 = createButton("CAPRICORN");
  button1.position(750, 640);
  button1.mousePressed(roomCap);

  image(imm11, 950, 480, 150, 150);
  button1 = createButton("AQUARIUS");
  button1.position(950, 640);
  button1.mousePressed(roomAcq);

  image(imm12, 1150, 480, 150, 150);
  button1 = createButton("PISCES");
  button1.position(1150, 640);
  button1.mousePressed(roomPis);


}

function roomAri(){
  window.open("https://www.instagram.com/aries.bitch/");
}

function roomTau(){
  window.open("https://www.instagram.com/taurusimply/");
}

function roomGem(){
  window.open("https://www.instagram.com/notallgeminis/");
}

function roomCan(){
  window.open("https://www.instagram.com/cancerperfect/");
}

function roomLeo(){
  window.open("https://www.instagram.com/leofunfacts/");
}

function roomVir(){
  window.open("https://www.instagram.com/virgomemes_/?hl=it");
}

function roomLib(){
  window.open("https://www.instagram.com/libras.society/");
}

function roomSco(){
  window.open("https://www.instagram.com/scorpionsroyalty/");
}

function roomSag(){
  window.open("https://www.instagram.com/sagittariusweet/");
}

function roomCap(){
  window.open("https://www.instagram.com/capricornasty/");
}

function roomAcq(){
  window.open("https://www.instagram.com/aaquariusmemes/");
}

function roomPis(){
  window.open("https://www.instagram.com/piscesmemes101/");
}
