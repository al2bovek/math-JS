"use strict";

let num_1 = prompt("first number");
let num_2 = prompt("second number");
let num_3 = prompt("third number");

const getMax = Math.max(num_1, num_2, num_3);
document.getElementById("_screen").innerHTML = `${getMax}`;