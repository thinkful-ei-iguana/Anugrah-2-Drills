'use strict'

function repeat(fn, n) {
let i = 1;
while (i <= n) {

    fn(); 
    i++
}
}


function hello() {
    console.log('Hello World');
}

function goodbye() {
    console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);