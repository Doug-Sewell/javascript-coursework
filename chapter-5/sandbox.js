const dogs = {
    legCount: 3,
    names: ['Wrigley','Athena'],
    makeSound() {
        alert('Woof!');
    },
    displayNamesIncorrectly: () => {
        console.log(this.names); //Looks for the value of names in the Window object which doesn't exist.
    },
    displayNames() {
        console.log(this.names); //ES5 shorthand syntax which will refer to the names key in this object which holds the name names.
    },
    displaysWindow: () => {
        console.log(this);
    },
    showThisObject() {
        console.log(this);
    }
}

dogs.displayNamesIncorrectly(); //logs undefined.
dogs.displayNames(); //Logs the names correclty. 
dogs.displaysWindow(); //Will log hte window object.
dogs.showThisObject();

//Using Math:
console.log('Using Pi: ' + Math.PI);
const num = 37.28;
console.log('Rounded to the nearest number: ' + Math.round(num));
console.log('Rounds down: ' + Math.floor(num));
console.log('Rounds up: ' + Math.ceil(num));
console.log('Keeps the whole number and eliminates the decimals: ' + Math.trunc(num));

//Getting a random number.
console.log('Random number between zero and one: ' + Math.random()); 
console.log('Random number between zero and a hundred: ' + Math.random()*100);
console.log('Random number between zero and a hundred, but rounded to a whole number: ' + 
            Math.round(Math.random()*100));

