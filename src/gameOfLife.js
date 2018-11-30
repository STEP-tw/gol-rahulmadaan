const { daysIteration,
  world,
  getCoordOfAliveCells,
  validateInput,
  validateOutput
} = require('./library.js');

const nextGeneration = function(currGeneration, bounds) {
    let result = [];
    let heightOfWorld = (bounds.bottomRight[1] - bounds.topLeft[1] + 1);
    let lengthOfWorld = (bounds.bottomRight[0] - bounds.topLeft[0] + 1);
    result = world(lengthOfWorld,heightOfWorld,validateInput(bounds,currGeneration));
    result = daysIteration(result);
    return validateOutput(bounds,getCoordOfAliveCells(result));
};

module.exports = { nextGeneration };
