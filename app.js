// console.log('I am Connected 1')

// Demo - 1 - Pseudocode
/*
// *** Fizz Buzz App ***
// --- Problem ---
// Write a program that prints each number from 1-20 on a new line
    // IF multiple of 3, print “Fizz” INSTEAD of the number
    // IF multiple of 5, print “Buzz” INSTEAD of the number
    // ELSE numbers that are multiples of BOTH 3 and 5 print “FizzBuzz” INSTEAD of the number

// --- Solution ---
// Write a program that prints each number from 1-20 on a new line
// The modulus operator (%) returns the division remainder which will be helpful to resolve this task
    // If needed for modulus of 15 || 3 || 5 and else to catch everything else
        // will need to think of the order of the if statements to catch correctly.

// --- Code ---
*/

// Demo - 2 - Arrays - Example actual learning cover in next class
/*
// --------- arrays
console.log([]);
console.log([1,2,3,4]);
console.log([1,'2',true,[]]);

// --------- Zero Based
// const varArray = [1,'2',true,1234]
// console.log(varArray);
// console.log(varArray[0]);
// console.log(varArray.length);
*/

// Demo - 3 - Objects - Example actual learning cover in next class
/*
// --------- Working with objects
// const obj1 = {
// 	firstname: 'Foo',
// 	lastName: 'Bar',
//  age: 21
// };

// console.log(obj1);
// console.log(obj1.firstname);
*/

// Demo - 4 - Loops - Example actual learning cover in next class
/*
// ==== basic loop ==== \\
// for (let i = 0; i <= 10; i++) {
//     console.log(`this is i = ${1 + 1}`);
// }

// ==== Iterate through an array ==== \\
// Iterate over Array Loop (Remember to use array length - 1)
// const array1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < array1.length; i++) {
//     console.log(`array position = ${i} contains ${array1[i]}`);
// }
*/

// Demo - 5
/*
// https://jsonplaceholder.typicode.com

// Using Callbacks and Promises
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

// Async example
// let response
// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => reponse = json)

// console.log('Response outside of the callback', response)
*/