function setup() {
	// put setup code here
	var myCanvas = createCanvas(windowWidth, windowHeight);
    // myCanvas.parent("sketch1");
    myCanvas.position(0, 0);
    myCanvas.style('z-index', '-1');
	
	fill(120);
	noStroke();


}

function draw() {

	background(255,255,200);

	for (var y = 50;  y <= height - 50;  y +=100) {
		for (var x = windowWidth / 2 + 50;  x <= width - 50;  x +=100) {
			
			stroke(120);
			line(x, y, mouseX, mouseY);
			noStroke();
			ellipse(x,y,10,10);
	
	}
	}
}