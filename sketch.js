//variables go up here
let img1;
let img2;
let img3;
let img4;
//let vid1;
function preload(){
  img1 = loadImage('assets/pond.jpg');
  img2 = loadImage('assets/waterFall.jpg');
  img3 = loadImage('assets/tree.jpg');
  img4 = loadImage('assets/lake.jpg');
  //vid1 = createVideo('assets/waterFall2.MOV');
  //stuff to prepare gets done here
}
function setup() {
  createCanvas(1440, 900);
  //vid1.position(100, 600);
//things to establish the "sandbox" go here
}
function draw() {
  background(255, 204, 0);
  rect(0,0,750, 400);
  rect(650,500,750,400);
  image(img1, 0, 0);
  image(img2, 250, 0);
  image(img3, 500, 0);
  image(img4, 700, 500);
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
