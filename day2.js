/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict'

function max(numbers) {
  /*if (numbers == undefined) {
	  return null;
	}*/
  
  let i = 0;
  let currentmax = numbers[0];
  while (i < numbers.length) {  
	  if (numbers[i] > currentmax) {
      currentmax = numbers[i];
	  }
    i++;
  }
  
  return currentmax;
  // your code here
}
  
function min(numbers) {
  /*if (numbers === undefined) {
	  return null;
	}*/ 
  
  let i = 0;
  let currentmin = numbers[0];
  while (i < numbers.length) {  
	  if (numbers[i] < currentmin) {
      currentmin = numbers[i];
	  }
    i++;
  }
  
  return currentmin;
  
  
  // your code here
}

////////////////


function average(numbers) {
	let sum = 0;
	numbers.forEach(function(a) {sum += a;})
  
	return sum/numbers.length;
	// your code goes here
  }