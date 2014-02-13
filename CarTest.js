var car = require("./Car.js"),
	assert = require('assert'),
    should = require('should');

describe('Car', function() { 
    var testCar = car;
    describe('when displaying the car\'s name', function() {
        it('should contain the make, model and year', function() {
            assert.equal(testCar.getName(), testCar.year + " " + testCar.make + " " + testCar.model);
        })
    })
    describe('when start a car built before 1985', function() {
        it('should give a chugga with a vroom', function() {
            testCar.year = 1970;
            should.equal(testCar.start(), "chugga chugga vroom vroom!");
        })
    })
    describe('when starting a car built after 1985', function() {
        it('should give a chugga with a vroom', function() {
            testCar.year = 1997;
            assert.equal(testCar.start(), "vroom vroom!");
        })
    })

    it('should be able to fly', function() {
        should.exist(testCar.canFly);
    })

    describe('If a car can fly', function() {
        it('should also know its altitude', function() {
            if(testCar.canFly) {
                should.exist(testCar.altitude);
            }
        })
    })

    it('should be able to be a convertable', function() {
        should.exist(testCar.isConvertable);
    })

});
