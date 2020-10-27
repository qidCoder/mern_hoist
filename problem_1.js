//GIVEN
console.log(hello);                                   
var hello = 'world';  

////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello); //logs undefined
hello = world;

// Run the same code as above with ES6 syntax and compare your results:
console.log(hello);                                   
let hello = 'world'; 

