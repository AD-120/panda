function setup() {
  createCanvas(600, 600);
  textFont("Courier");
  textSize(100);
}
function draw() {
  background(bg);
  text("PANDA", 100, 100);
  let txt = "Drama";
  text(txt, 200, 200);
  let c = "❀‿❀";
  text(c, 300, 300);
  text(frameCount, 400, 400);
}
function mousePressed() {
bg= random(255);
}
