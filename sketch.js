function setup() {
  createCanvas(600, 600);
  textFont("Courier");
  textSize(20);
}
function draw() {
  background(255);
  text("PANDA", 100, 100);
  let txt = "Drama";
  text(txt, 200, 200);
  let c = "❀‿❀";
  text(c, 300, 300);
  text(frameCount, 400, 400);
}
