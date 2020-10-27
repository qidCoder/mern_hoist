//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//////////////////////////////////////////

// Prediction: AFTER HOISTING BY THE INTERPRETER
dojo = {};
dojo.name = name; //assigns"Chicago" 
dojo.students = students;// assigns 65
dojo.hiring = true;//assigns true
return dojo;
console.log(makeDojo("Chicago", 65));//logs {name : "Chicago", students : 65, hiring: true}
dojo = {};
dojo.name = name; //assigns"Berkeley" 
dojo.students = students;// assigns 0
dojo = "closed for now"; 
return dojo;//returns undefined?
console.log(makeDojo("Berkely", 0));//logs {name : "Berkely", students : 0}

