'use strict';

const LinkedList = require('./linked-list');
const test = require('./stacks-and-queues');
const Stack = test.Stack;
const stack = new Stack();
let result = null;

const multiBracketValidation = (input)=>{
    let openingBracket = ['{', '[', '('];
    let closingBracket = ['}', ']', ')'];
    let arrOfBrackets = [];

    for (let i = 0; i < input.length; i ++){
        if(openingBracket.includes(input[i]) || closingBracket.includes(input[i])){
            arrOfBrackets.push(input[i]);
        }
    }

    // console.log('this is arrOfBrackets',arrOfBrackets);

    arrOfBrackets.forEach(ele=>{
        if(openingBracket.includes(ele)){
            stack.push(ele);
            console.log('this is the stack',stack);
        }else{
            let popVal = stack.pop();
            if(popVal === '{' && ele === '}'){
                console.log('got in pop {', popVal, ele);
                result = true;
            }else if(popVal === '[' && ele === ']'){
                console.log('got in pop [', popVal);
                result = true;
            }else if(popVal === '(' && ele === ')'){
                console.log('got in pop (', popVal, ele);
                result = true;
            }else{
                result =  false;
            }
        }
    })
    return result;
}

module.exports = multiBracketValidation;
