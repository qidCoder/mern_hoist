//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var dojo;//creates variable
dojo = "san jose";//assigns "san jose" to dojo AND makes it global 
console.log(dojo);//logs "san jose" to the console
learn();
function learn(){
    dojo = "seattle";//consoles an error that it has already been defined
}

// Prediction take 2: AFTER HOISTING BY THE INTERPRETER
var dojo;//creates variable
dojo = "san jose";//assigns "san jose" to dojo AND makes it global 
console.log(dojo);//logs "san jose" to the console
learn();
function learn(){
    dojo = "seattle";//reassigns "seattle" 
    console.log(dojo);//logs "seattle" to the console
    dojo = "burbank";//reassigns "burbank" to dojo
    console.log(dojo);//logs "burbank" to the console
}
console.log(dojo);//logs "seattle" to the console



// Run the same code as above with ES6 syntax and compare your results:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);