const { daysIteration,
  world,
  getCoordOfAliveCells
} = require('./library.js');

const nextGeneration = function(currGeneration, bounds) {
    let result = [];
    let heightOfWorld = (bounds.bottomRight[1] - bounds.topLeft[1] + 1);
    let lengthOfWorld = (bounds.bottomRight[0] - bounds.topLeft[0] + 1);
    result = world(heightOfWorld,lengthOfWorld, currGeneration);
    result = daysIteration(result);
    return getCoordOfAliveCells(result);
};

module.exports = { nextGeneration };
