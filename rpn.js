#!/usr/bin/env node

const reversePolishNotation = (input) => {
	if (input == "0") {
		return 0;
	}

	const tokens = input.split(" ");
	let stack = [];
	let nOne, nTwo = 0;
	
	
	tokens.forEach((x) => {
		switch (x){
		case '+':
			stack.push(stack.pop() + stack.pop());
			break;
		case '-':
			nOne = stack.pop();
			nTwo = stack.pop();			
			stack.push(nTwo - nOne);
			break;			
		case '/':
			nOne = stack.pop();
			nTwo = stack.pop();			
			stack.push(nTwo / nOne);
			break;			
		case '*':
			stack.push(stack.pop() * stack.pop());
			break;			
		default:
			if (!isNaN(x)) {
				stack.push(Number(x));
			}
		}
	});
	return stack[0];
};

module.exports = { reversePolishNotation }
