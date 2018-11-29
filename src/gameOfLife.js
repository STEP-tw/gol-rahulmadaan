const { daysIteration,
  world,
  getCoordOfAliveCells
} = require('./library.js');

const nextGeneration = function(currGeneration, bounds) {
    let result = [];
    let dimensionOfWorld = (bounds.bottomRight[0] - bounds.topLeft[0] + 1);
    result = world(dimensionOfWorld, currGeneration);
    result = daysIteration(result);
    return getCoordOfAliveCells(result);
};

module.exports = { nextGeneration };
