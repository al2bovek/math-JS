"use strict";

let num_float = +prompt("first number");
let n = +prompt("n number");

let result = num_float.toFixed(n);
document.getElementById("_screen").innerHTML = result;