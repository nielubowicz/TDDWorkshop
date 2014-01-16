// Run from terminal: node Car.js

//  Car Definition 
var car = {
	make	: "Citroen",
	model	: "DS",
	year	: 1975,
	canFly	: true,
	altitude: 1000,
	isConvertable : true,
	isTopUp : false,
	getName : function() {
		return this.year + " " + this.make + " " + this.model;
	},
	start : function() {
		return this.year < 1985 ? "chugga chugga vroom vroom!" : "vroom vroom!";
	},
	putTopUp : function() {
		if (this.canFly && this.isConvertable && this.altitude > 3000) {
			this.isTopUp = false;
		} else {
			this.isTopUp = true;
		}
		return this.isTopUp;
	},
	putTopDown : function() {
		this.isTopUp = false;
		return this.isTopUp;
	}
}

module.exports = car;