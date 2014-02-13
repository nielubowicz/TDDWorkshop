// Run from terminal: node Car.js

//  Car Definition 
var car = {
	make	: "Citroen",
	model	: "DS",
	year	: 1975,
	canFly	: true,
	altitude: 1000,
	isTopUp : false,
	isConvertable: true,
	getName : function() {
		return this.year + " " + this.make + " " + this.model;
	},
	start : function() {
		return this.year < 1985 ? "chugga chugga vroom vroom!" : "vroom vroom!";
	},
	putTopUp : function() {
		this.isTopUp = true;
		return this.isTopUp;
	},
	putTopDown : function() {
		this.isTopUp = false;
		return this.isTopUp;
	}
}

module.exports = car;