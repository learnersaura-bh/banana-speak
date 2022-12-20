var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorMessage = document.querySelector("#error-msg")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText
}


function clickHandler(){
//    outputDiv.innerText = "asasasjsjs " + txtInput.value
    var inputText = txtInput.value;    

    //calling server
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>  {
            var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

function errorHandler(){
   errorMessage.innerText = "*Server is not working, try after sometime"
}

btnTranslate.addEventListener("click", clickHandler);