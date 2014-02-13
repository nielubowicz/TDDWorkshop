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
	putTopDown : function() {
		if (this.canFly && this.isConvertable && this.altitude > 3000) {
			this.isTopUp = true; // Sorry, cannot put it down if too high
		} else {
			this.isTopUp = false;
		}
		return !this.isTopUp; // able to put top down?
	},
	putTopUp : function() {
		this.isTopUp = true;
		return this.isTopUp;  // able to put top up?
	}
}

module.exports = car;