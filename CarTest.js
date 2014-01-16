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
	'If a car can fly' : {
		topic : car,
		'it should also know its altitude' : function(testCar) {
			if (testCar.canFly) {
				assert.isDefined(testCar.altitude);
			} 
		}
	}
}).run();