"use strict";

let num_nonNegativeInteger = +prompt("first number");
let n = 2;

let result = num_nonNegativeInteger % 2 === 0;
document.getElementById("_screen").innerHTML = result;