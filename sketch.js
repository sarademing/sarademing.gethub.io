//variables go up here
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;

//let vid1;
function preload(){
  img1 = loadImage('assets/pond.jpg');
  img2 = loadImage('assets/waterFall.jpg');
  img3 = loadImage('assets/tree.jpg');
  img4 = loadImage('assets/lake.jpg');
  img5 = loadImage('assets/bush.jpg');
  img6 = loadImage('assets/heart.jpg');
  
  //vid1 = createVideo('assets/waterFall2.MOV');
  //stuff to prepare gets done here
}
function setup() {
  createCanvas(1440, 900);
  //vid1.position(100, 600);
//things to establish the "sandbox" go here
}
function draw() {
  background(238, 130, 238);
  rect(0,0,750, 400);
  rect(690,500,750,400);
  fill("yellow");
  circle(1130, 200, 80);
  fill("white");
  ellipse(1130, 150, 60, 100);
  image(img1, 0, 0);
  image(img2, 250, 0);
  image(img3, 500, 0);
  image(img4, 690, 500);
  image(img5, 940, 500);
  image(img6, 1190, 500);
  
  //think of this area as a looping function that continuall puts things on screen, in order
}
//function mousePressed() {
//if(vid1.isPlaying(assets/waterFall2.MOV)) {
//  vid1.stop(assets/waterFall2.MOV);
//}
//else {
//  vid1.play(assets/waterFall2.MOV);
//}


 // }
