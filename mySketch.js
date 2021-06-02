let coordinate = 25 
let inside = 255

function setup() {
	createCanvas(800, 600);
	background(127); // background colour is set to gray.
	frameRate(20);
}

function draw() {
	ellipse(coordinate, 300, 50, 50);
	coordinate += 50; // each circle is placed 50px, strating from 25.
	if (coordinate > 850) { // when the program reaches the last ellipse.
		coordinate = 25;
		fill(inside); // Inside means the fill colour is set to white.
		ellipse(coordinate, 300, 50, 50);
		coordinate += 50; // once it reaches the last ellipse it overlaps over the previous ellipses and continues.
	}
		inside -= 2; // the value of the fill colour decreases by 2 each time it reaches the end of the line.
}
