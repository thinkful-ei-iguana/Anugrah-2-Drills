/* eslint-disable indent */
'use strict';

let sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let arr = sentence.split(' ');

let final = arr.reduce((finalSent, word) => {  
    if (word.length === 3) {
        return finalSent + ' ';
    }
    else {
        return finalSent + word[word.length-1].toUpperCase();
    }
}, '');

console.log(final);


