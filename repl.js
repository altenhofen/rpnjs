#!/usr/bin/env node
const { reversePolishNotation } = require('./rpn');
const prompt = require("prompt-sync")({ sigint: true });

let isRunning = true;

console.log("welcome to the js rpn calculator");
console.log("press Ctrl-c to exit\n\n");

while (isRunning) {
	const input = prompt(">> ");
	console.log(reversePolishNotation(input));
}
