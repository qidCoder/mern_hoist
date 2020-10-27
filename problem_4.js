//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var food;
food = 'chicken';
console.log(food);//logs 'chicken' to the console
eat();
function eat(){
    food = 'half-chicken';//reassigns 'half-chicken' to food
    console.log(food);//logs 'half-chicken' to the console
    var food;//logs an error that food is already defined
    food = 'gone';
}

// Run the same code as above with ES6 syntax and compare your results:
let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}