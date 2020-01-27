function setup() {
	// put setup code here
	var myCanvas = createCanvas(windowWidth * 0.8, windowHeight * 0.6);
    myCanvas.parent("sketch3");

    myCanvas.position(0, 0);


}

function draw() {

		background(90,90,90);
		fill(50,50,50);
		noStroke();

	
		for (var y = 10;  y <= height;  y +=20) {
			for (var x = 10;  x <= width;  x +=20) {
			
			
			ellipse(x,y,20,20); 
	
	}
	}
	



}