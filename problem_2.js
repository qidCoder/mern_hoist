//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
var needle;
needle = 'haystack';
var needle;
needle = 'magnet';
console.assert.log(needle);//logs 'magnet' to the console

// Run the same code as above with ES6 syntax and compare your results:
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}