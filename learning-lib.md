userInput = prompt("give your name")



alert( " hello " + userInput)


var btnTranslate = document.querySelector("#btn-translate")

btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked")
})


................................................
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = "saurabh"


function clickHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
}



btnTranslate.addEventListener("click", clickHandler);

.....................................................
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am shaktiman"
undefined
fetch(url)
.then(function responseHandler(response) {return response.json()})
.then(function jsonHandler(json) {console.log(json)})
                     OR
.then(response => respnse.json())
.then(json => console.log(json))
                     
Promise {<pending>}
VM4291:3 
{success: {…}, contents: {…}}
contents
: 
text
: 
"I am shaktiman"
translated
: 
"Testing,  you are"
translation
: 
"yoda"
[[Prototype]]
: 
Object
success
: 
{total: 1}
[[Prototype]]
: 
Object