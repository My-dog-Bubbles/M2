//// 1/13/2025
// JavaScript Code goes here 
/// console.log("internal Js code message. Hello bob!")
/// console.log(document)
// document == html code
// console.dir(document) == document background code


///alert("My milk shake") // text pop-up
///window.onload = function(){
//Alerts wraped in a function:
    ///alert("Help me jank")
    ///alert(`Java like black tits`)
    // change quote if java is not working (' ',''' ''',` `)
///}

//Prompts://

//Delaration
//let
    //CHANGEABLE
///const student = prompt("Was my name?")
    //Not Chanagable
///console.log(student)
// Check what is the value for the the veriable student

///document.write(`<p>Whats my name, whats my name, ${student}!</p>`)
//writes to document

/// const student = prompt( "What my name?");
/// const messageElemant = document.createElement("p"); // create a new <p> element
/// messageElemant.textContent = `Hello, $(student)!`; //set the text content of that <p> element
/// document.body.appendChild(messageElemant) // append the new <p> to body
// This ensure the content is dynamically added without overwriting and page content

//Write to element by ID:
/// document.getElementById("myH1").innerHTML="This is long :(";
/// document.getElementById("myText").textContent = "bootyfull"

// Styling:
/// document.body.style.color = "green";
/// document.body.style.backgroundColor = "pink";
/// document.body.style.fontSize = "2em";

//// 1/14/2025

// Event Listeners: //
/*document.getElementById("myHeader").addEventListener("click",function(){
    // function detail goes here
    document.getElementById("myHeader").style.color = "blue"
});///

/*document.getElementById("myButton").addEventListener("click",function(){
    document.getElementById("myButton").style.backgroundColor = "yellow"
});*///

// DIFFERECNE BETWEEN .innerHTML and .textContent: //
///console.log(document.getElementById("Para2".innerHTML));
// sees text a html format and it is not for user input

///console.log(document.getElementById("Para2".textContent));
// Used for user imput, sees text as text only, best to use for use inputs because if a user was to put html code innerHTML then it would mess with the code.

// Variables //
///let x;
    // has to be declared
    //var is another old seporite version
///console.log(x);
///x=2;
///console.log(x);
///const y=10;
// has to be initialized


//BOB
//let s_name = "angel";
/*let s_name = prompt("wHAT IS YOUR NAME: ")
console.log(s_name);//name is reserved
window.alert(`HELLO, my name is $(s_name)`); // have to use backtic*/

// let online = false;
// console.log(online)
// console.log(`Online = ${online}!`)//use curly bracket

// //Arithmeti operators//
// // +, *, -, /, **, %, ++, --

// let student = 24;
// console.log(student)
// student = student + 1;
// console.log(student);
// student += 1;
// console.log(student);// you can do this with any operator

// console.log(typeof student);
// console.log(student, typeof student);

// myNumber = 5;
// console.log(myNumber, typeof myNumber);
// myNumber = 5.5;
// console.log(myNumber, typeof myNumber);

// let myAge = prompt("WHATS YOUR AGE");
// console.log(myAge, typeof myAge);
// myAge = Number(myAge);
// console.log(myAge, typeof myAge);

// let x ='pizza'
// let y = "pizza"
// let z = "pizza"
// x = Number(x)
// console.log(x) 

// //can convert into string

// z = Boolean(z) // string of false equals true but empty string equals false
// console.log(z, typeof z)

/////2/11/25
// let x = 1.99
// let y = 4
// let z = 8.2

// console.log(Math.PI)
// console.log(Math.min(x,y,z))
// console.log(Math.max(x,y,z))
// console.log(Math.sqrt(y))
// console.log(Math.round(x))
// console.log(Math.floor(x))
// console.log(Math.ceil(x))
// console.log(Math.trunc(z)) // remove decimal
// console.log(Math.pow(x,y))
// console.log(Math.sign(5))
// console.log(Math.random)
// console.log(Math.random()*10)

// let min = 1
// let max = 100

// function getRbdIntExclusive(min,max){
//     return Math.floor(Math.random() * (max-min))+min
// }

// function getRbdIntInclusive(min,max){
//     return Math.floor(Math.random() * (max-min +1))-min
// }

// spread operator=iterate items
let numbers = [1,2,3,4,5]
let errormax = Math.max(numbers)
let newmax = Math.max(...numbers)// the three dots are the spread operator
console.log(errormax)
console.log(newmax)

let username = "angel .C"
let letters = [...username]
console.log(username)
console.log(letters)

let assembleuser = [...username].join("-")
console.log(assembleuser)
foods = [...fruits, ...vegi]
console.log(foods)

let fruits = ["apple","banana","peach"]
let vegi = ["celery","carrot","brocoli"]
foods = [...fruits, ...vegi, "eggs", "milk"]
console.log(foods)