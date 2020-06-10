// Exercise 1
// Use your previous for loops and create a function which print the first N numbers.

for (let i = 0; i < 21; i = i + 2) {
    console.log(i);
}

let printNumbersTill = (x) => {
    for (let i = 1; i < x+1; i++) {
        console.log(i);
    }
}

let x = 20;

// Exercise 2
// Create a function which gets a name as parameter and then returns
// a greeting to the specified person.

// getGreetingTo('Mark');              // Should not print to the console
// console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

let getGreetingTo = (name) => {
    return `Hello ${name}!`;
};

// Exercise 1
// Create a function which gets an array as parameter and prints 
// each value from it.

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

// Exercise 2
// Change your previous printValues function to use forEach loop.

let printValuesLoop = (array) => {
    array.forEach(number => {
        console.log(number)
    });
}