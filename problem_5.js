//GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
mean();//notes a function but doesn't run it yet
console.log(food);//notes a console log and keeps parsing
var mean;
mean = function(){
    food = "chicken";//assigns "chicken" to food
    console.log(food);//logged "chicken" to the console
    var food;//error that food is already defined and ends program



}


// Run the same code as above with ES6 syntax and compare your results:
mean();
console.log(food);
let mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);