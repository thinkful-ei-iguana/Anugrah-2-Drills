/* eslint-disable indent */
'use strict';
function hazardWarningCreator(typeOfWarning) {

    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}"`);
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hailWarning = hazardWarningCreator('A likelihood of Hail');
const earthWarning = hazardWarningCreator('massive earthquake');

rocksWarning('rockland');
hailWarning('hailland');
earthWarning('earthquakeland');