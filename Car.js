// Run from terminal: node Car.js

//  Car Definition 
var car = {
	make	: "Citroen",
	model	: "DS",
	year	: 1975,
	getName : function() {
		return this.year + " " + this.make + " " + this.model;
	},
	start : function() {
		return this.year < 1985 ? "chugga chugga vroom vroom!" : "vroom vroom!";
	}
}

module.exports = car;changes
Mirrors
