/*
printThis();

function printThis() {
    console.log('This will work.');
}
*/
/*
thisWont();

const thisWont = () => {
    console.log('This will not print.');
}
*/

const helloThere = (name = "Bob") => {
    console.log(`Hello there ${name}`);
}
helloThere('Jim');
helloThere();
//Console logs "Hello there Jim" the first time. Logs Bob the second time. 




const name = 'Bob';

//Method:
let result = name.toUpperCase();
console.log(result);

//Function:
const greet = () => 'hello';

let otherResult = greet();
console.log(otherResult);