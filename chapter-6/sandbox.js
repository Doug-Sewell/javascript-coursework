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

