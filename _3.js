"use strict";

let num_min = prompt("first number");
let num_max = prompt("second number");
let result = Math.round(Math.random() * (num_max - num_min) + +num_min);
document.getElementById("_screen").innerHTML = result;