'use strict';

const test = require('./stacks-and-queues');
const Stack = test.Stack;
const stack = new Stack();

const multiBracketValidation = (input)=>{
    let openingBracket = ['{', '[', '('];
    let closingBracket = ['}', ']', ')'];

    for (let i = 0; i < input.length; i ++){
        if(openingBracket.includes(input[i])){
            stack.push(input[i]);
        }else if(closingBracket.includes(input[i])){
            console.log(('got in checking closingB', input[i]));
            if(stack.pop() === '{' && input[i] === '}'){
                return true;
            }else if(stack.pop() === '[' && input[i] === ']'){
                return true;
            }else if(stack.pop() === '(' && input[i] === ')'){
                return true;
            }else{
                return false;
            }
        }
    }
}
module.exports = multiBracketValidation;

