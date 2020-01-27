'use strict';

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const integerSteps = turtleSteps.filter(a => a[0] >= 0 && a[1] >= 0);

//console.log(integerSteps);

const totalSteps = integerSteps.map(b => b[0] + b[1]);

//console.log(totalSteps);

totalSteps.forEach((c, index) => {
    console.log(`Movement #${index + 1}: ${c} steps`)
});