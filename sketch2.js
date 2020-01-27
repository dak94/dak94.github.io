var xoff = 0.0;

function preload() {
  myFont = loadFont('fonts/Oscine_Trial_XBd.ttf');
}

function setup() {
  noiseSeed(99);
  var myCanvas = createCanvas(windowWidth, windowHeight;
    myCanvas.parent("sketch2");

    myCanvas.position(0, 0);

	fill(0,255,172);

  stroke(0, 255, 172, 25);

  fill(190);
  textFont(myFont);
  textSize(windowHeight);
  //text('DAN', -20, windowHeight);
}

function draw() {
  xoff = xoff + .015;
  var n = noise(xoff) * width;
  
  if (true) {
  	n < windowWidth/2;
  	n = n*2;
  }

  line(n*mouseX / 1920 + random(0.8,1.2)  , 0 , n * random(0.8,1.2) - mouseY * 2 , height);
}