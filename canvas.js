let canvas = document.querySelector('canvas'); // set up canvas
let c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
let cellWidth = 34;
let cellHeight = 21;
let rows = canvas.height / cellWidth;
let cols = canvas.width / cellHeight;
let padding = 5;
// shapes and movement
	// grid

		// for (let i = 0; i < rows; i++) {
		// 	for (let j = 0; j < cols; j++) {
		// 		c.save();
		// 		c.translate(j * cellWidth, i * cellHeight);
		// 		c.beginPath()
		// 		c.rect(padding, padding, cellWidth - padding, cellHeight - padding);
		// 		c.fill();
		// 		c.closePath();
		// 		c.restore();
		// 	}
		// }

	// circular motion
		// this.update = (particles) => {
		// 	this.radians += this.velocity.x;
		// 	this.x = centrePoint + Math.cos(this.radians) * this.orbit;
		// 	this.y = centrePoint + Math.sin(this.radians) * this.orbit;
		// }

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
});	



let x, y;

function init() {
	x = 0;
	y = 0;
	c.fillStyle = '#111';
	c.fillRect(0,0,canvas.width, canvas.height);
}

let ticker = 0;
function animate() {

	requestAnimationFrame(animate);

	if (ticker % 2 === 0) {

			let randomSkew = document.getElementById('random-skew');
			let randomValue = randomSkew.value / 10;

			c.save();
			c.beginPath();
			if (Math.random() < randomValue) {
				c.moveTo(x, y);
				c.lineTo(x + cellWidth, y + cellHeight)
			} else {
				c.moveTo(x + cellWidth, y);
				c.lineTo(x, y + cellHeight)
			}
			c.lineWidth = 3;
			c.shadowBlur = 5;
			c.shadowColor = '#20c20e';
			c.strokeStyle = '#20c20e';
			c.stroke();		
			c.closePath();
			c.restore();

			x += cellWidth;
		
		if (x >= canvas.width) {	
			x = 0;
			y += cellHeight;
		}

		if (y >= canvas.height - cellHeight) {
			x = 0; 
			y = 0;
			c.fillRect(0,0,canvas.width, canvas.height);
		}
	}

	ticker++;
	console.log(ticker)
}

init()
animate()
