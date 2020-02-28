let age = 52;
let year = 2020;

console.log(age, year);

age = 25;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

//Strings
console.log(`Hello world`);

let email = 'mario@mushroomkingdom.com';
console.log(email);

//String concatenation
let firstName = 'Super';
let lastName = 'Mario';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

result = email.lastIndexOf('o');
console.log(result);

result = email.slice(0,5); //start and end
console.log(result);

result = email.substr(0,10); //start position and how many spots to move forward.
console.log(result);

result = email.replace('m','w'); //Replaces the first instance.
console.log(result);

/*
Numbers
*/

let radius = 10;
let pi = 3.14;

//Math operators: +, -, *, /, **, %
console.log(10/2);

let solution = pi * radius**2;
console.log(solution);
let someArray = [1, 5, 28, 2, 7];
let resultString = someArray.join(', ');
console.log(resultString);
let num = someArray.indexOf(2);
console.log(num);
let otherArray = someArray.concat([20, 38, 30]);
console.log(otherArray);

let wontPrintArray = someArray.push(82);
console.log(wontPrintArray); //This will print 6 which is the length of the array.
console.log(someArray); //This will print the updated array which is someArray from above with 82 at the end.
let lastNum = someArray.pop(); //Now someArray is the original values and lastNum has a value of 82 which was added a few lines up.
console.log(lastNum);
console.log(someArray);

let numToString = 50;
let newString = String(numToString);
console.log(newString);
console.log(typeof newString);