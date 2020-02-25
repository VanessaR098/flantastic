let mic;
let flan = [];
let numFlan;

function setup() {
  createCanvas(1000, 1000);
  dripY = height / 7;
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {

  //when mouse moves across screen, background color changes 
  let x = map(mouseX, 0, 400, 120, 240);
  background(x, 213, 213);

  //goes through background flan array and displays/animates amount of background flans in that array
  if (mouseIsPressed) {
    for (let i = 0; i < numFlan; i++) {
      flan[i].display();
      flan[i].shake();
    }
  }
  //randomize number of flans in background when page is refreshed
  numFlan = Math.random() * width / 5;
  for (let i = 0; i < numFlan; i++) {
    flan[i] = new Flan(random(0, width), random(0, height), 1); //randomize placement of background flans 
  }

  drawPlate();
  drawFlan();
  drawDrip();
}


function drawFlan() {
  let vol = mic.getLevel(0.9);
  // set vol level to 0.9 to smoothen shake movement of main flan when mic is used; less jittery <3

  //FLAN BODY 
  push();
  noStroke();
  //make syrup and body of flan shake with mic
  let shake = map(vol, 0, 0.3, width / 2, width / 1.98); //for syrup
  let shakerect = map(vol, 0, 0.3, width / 3, width / 2.95); //for body

  fill(255, 217, 102);
  rect(width / 3, height / 2.22, shakerect, height / 4, 200, 200, 20, 20);
  ellipse(shake, height / 1.5, width / 3, height / 6);

  //SYRUP ON TOP OF FLAN
  fill(153, 51, 0);
  ellipse(shake, height / 1.95, width / 3.5, height / 7.5);




  //SHINEYTHING
  //make highlights on flan shake 
  let shakeshine = map(vol, 0, 0.3, width / 2.07, width / 2);
  let shakeshine2 = map(vol, 0, 0.3, width / 1.8, width / 1.75);

  fill(255, 255, 255);
  ellipse(shakeshine, height / 1.79, width / 12, height / 65);
  ellipse(shakeshine2, height / 1.795, width / 25, height / 88);
  pop();


}


function drawPlate() {

  //PLATE SHADOW 
  push();
  noStroke();
  fill(146, 146, 146);
  ellipse(width / 2, height / 1.45, width / 2, height / 3);
  pop();

  //PLATE 
  push();
  noStroke();
  fill(250, 250, 250);
  ellipse(width / 2, height / 1.49, width / 2, height / 3);
  pop();

  //LIGHTER SYRUP ON PLATE
  push();
  noStroke();
  fill(198, 140, 83);
  ellipse(width / 2, height / 1.5, width / 2.2, height / 3.5);
  pop();

  //SYRUP ON PLATE
  push();
  noStroke();
  fill(102, 34, 0);
  ellipse(width / 2, height / 1.45, width / 3, height / 6);
  pop();
}

function drawDrip() {
  //DRIP
  push();
  noStroke();
  let vol = mic.getLevel();

  fill(153, 51, 0);
  rect(width / 1.7, height / 2.1, width / 25, dripY, 10, 20, 50, 20);


  //side note: can replace drip animation w mic input animation... change dripY to vol*200

  //DRIP TRICKLES SLOWLY
  dripY += 1;

  if (dripY > height / 5) {
    dripY = height / 8;
  }
}