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