var car = require("./Car.js"),
	vows = require('vows'),
	assert = require('assert');
	
vows.describe('Car').addBatch({
	'when displaying the car\'s name' : {
		topic : car,
		'it should contain the make, model and year' : function(testCar) {
			assert.equal (testCar.getName(), testCar.year + " " + testCar.make + " " + testCar.model);
		}
	},
    'when starting a car built before 1985': {
        topic : car,
        'we get a chugga with a vroom': function(testCar) {
			testCar.year = 1970;
            assert.equal (testCar.start(), "chugga chugga vroom vroom!");
        }
    },
    'when starting a car built after 1985': {
        topic : car,
        'we get a nice and healthy sounding vroom vroom': function(testCar) {
			testCar.year = 1997;
         	assert.equal (testCar.start(), "vroom vroom!");
        }
    },
	'A car' : {
		topic : car,
		'should be able to fly' : function(testCar) {
			assert.isDefined(testCar.canFly);
		},
		'should be able to be a convertable' : function(testCar) {
			assert.isDefined(testCar.isConvertable);
		}
	},
	'If a car can fly' : {
		topic : car,
		'it should also know its altitude' : function(testCar) {
			if (testCar.canFly) {
				assert.isDefined(testCar.altitude);
			} 
		},
		'it should not be able to pop its top if its a convertable and over 3000 feet' : function(testCar) {
			if (testCar.canFly && testCar.isConvertable) {
				testCar.altitude = 3001;
				assert.equal (testCar.putTopUp(), false);
			} 
		}
	},
	'If a car is a converable' : {
		topic : car,
		'it should be able to put its top up if its lower than 3000 feet' : function(testCar) {
			if (testCar.isConvertable) {
				testCar.altitude = 10;
				assert.equal(testCar.putTopUp(), true);
			} 
		},
		'it should be able to put its top down' : function(testCar) {
			if (testCar.isConvertable) {
				assert.equal(testCar.putTopDown(), false);
			} 
		}
	}

}).run();