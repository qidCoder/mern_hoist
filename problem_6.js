//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var genre;
genre = 'disco';
console.log(genre)//print "disco" to the console
rewind()//error that function is not defined

// Run the same code as above with ES6 syntax and compare your results:
console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);