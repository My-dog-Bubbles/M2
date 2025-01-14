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
document.getElementById("myHeader").addEventListener("click",function(){
    // function detail goes here
    document.getElementById("myHeader").style.color = "blue"
});

document.getElementById("myButton").addEventListener("click",function(){
    document.getElementById("myButton").style.backgroundColor = "yellow"
});

// DIFFERECNE BETWEEN .innerHTML and .textContent: //
console.log(document.getElementById("Para2".innerHTML));
// sees text a html format and it is not for user input

console.log(document.getElementById("Para2".textContent));
// Used for user imput, sees text as text only, best to use for use inputs because if a user was to put html code innerHTML then it would mess with the code.


    

    

