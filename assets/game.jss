var s;
var count = 0;
var answerArr = [];

var winNumber = document.getElementById("winNumber");
var currentWord = document.getElementById("currentWord");
var guessRemain = document.getElementById("guessRemain");
var alreadyUsed = document.getElementById("alreadyUsed");

function startup() {
    for (i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_";
    }
    s = answerArr.join(" ");
    document.getElementById("guess-string").innerHTML = s;
}