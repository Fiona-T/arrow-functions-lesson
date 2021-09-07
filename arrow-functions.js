/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //code block
//     return a + b;
// }

// let sum = addTwoNumbers(7, 41);
// console.log(sum);

// 1. Arrow Function With Parameters
// use for more complex, keep return keyword (also if multiple lines in return, use parentheses)
const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}

let sum = addTwoNumbers(7, 41);
console.log(sum);

// 2. Single Line Arrow Function With Parameters, implicit return
// simple function
const addTwoNumbers2 = (a, b) => a + b;
// or wrap the return in parenteses like below
// const addTwoNumbers2 = (a, b) => (a + b);

let sum2 = addTwoNumbers2(7, 41);
console.log(sum2);

// 3. Implicit Returns with single or no  parameters
// only one parameter, no need for parentheses around parameter
const saySomething = message => console.log(message);

saySomething("Hello!!");
// or no parameter, use empty parentheses
const sayHello = () => console.log("Hello");

sayHello();

// 4. Returning Multiple Lines
// must use parentheses for the return part

const multiLine = () => (
    `<p>
        This is a multiline return!
    </p>`
)

console.log(multiLine());
