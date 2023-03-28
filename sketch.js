function setup() {
	// put setup code here
	var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("sketch1");

    myCanvas.position(0, 0);

	fill(0,255,172);
	noStroke();
}

function draw() {

		background(255,255,215,25);

	for (var y = 150;  y <= height - 50;  y +=100) {
		for (var x =  50;  x <= width - 50;  x +=100) {
			
			stroke(0,255,172);
			line(x, y, mouseX, mouseY);
			noStroke();
			ellipse(x,y,10,10); 
	
	}
	}
	
	fill(255,255,255);
	ellipse(mouseX,mouseY,10,10);

}