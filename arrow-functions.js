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

// Arrow Function With Parameters
// use for more complex, keep return keyword (also if multiple lines in return, use parentheses)
const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}

let sum = addTwoNumbers(7, 41);
console.log(sum);

// Single Line Arrow Function With Parameters
// simple function
const addTwoNumbers2 = (a, b) => a + b;
// or wrap the return in parenteses like below
// const addTwoNumbers2 = (a, b) => (a + b);

let sum2 = addTwoNumbers2(7, 41);
console.log(sum2);

// Implicit Returns
// only one parameter, no need for parentheses around parameter
const saySomething = message => console.log(message);

saySomething("Hello!!");

const sayHello = () => console.log("Hello");

sayHello();

// Returning Multiple Lines
// must use parentheses for the return part

const multiLine = () => (
    `<p>
        This is a multiline return!
    </p>`
)

console.log(multiLine());
