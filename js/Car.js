// console.log("this is working");

const car = module.exports = {
	color: "green",
	convertible: true,
	speed: 0,
	accelerate () {
		console.log(this.speed + " is the old speed.");
		(this.speed += 1);
		console.log(this.speed + " is the new speed.");
	},
	decelerate () {
		console.log(this.speed + " is the old speed.");
		(this.speed -= 1);
		console.log(this.speed + " is the new speed.");
	},
}

// car.accelerate();
// car.decelerate();
	
