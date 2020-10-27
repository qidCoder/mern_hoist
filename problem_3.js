//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var brendan;
brendan = 'super cool';
console.log(brendan);//logs 'super cool' to the console
function print(){
    brendan = 'only okay';
    console.log(brendan);//logs 'only okay' to the console
}

// Run the same code as above with ES6 syntax and compare your results:
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);