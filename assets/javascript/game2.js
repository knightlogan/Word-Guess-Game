var randomTeam = ["Panthers", "Falcons", "Bears", "Packers", "Saints", "Chiefs", "Seahawks", "Cowboys", "Patriots", "Browns" ]
var randomWord = randomTeam[Math.floor(Math.random() * randomTeam.length)];


var s;
var g;
var count = 0;
var answerArr = [];
var userArr = [];
var remainingLetters = randomWord.length;
var output = "";
var loseAmt = 10;

var winNumber = document.getElementById("winNumber");
var currentWord = document.getElementById("currentWord");
var guessRemain = document.getElementById("guessRemain");
var alreadyUsed = document.getElementById("alreadyUsed");

function startup() {
    console.log(randomWord)
    for (i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_ ";
        output = output + answerArr[i];
    }

    document.getElementById("guess-string").innerHTML = output;
    output = "";

    loseAmt = 10;
    
    document.getElementById("remain").textContent = loseAmt;
}

document.onkeyup = function play() {
    userGuess = event.key;
    if (loseAmt === 0) {
        alert("Game over!");
        loseAmt === 10;
    }
    for (i = 0; i < userArr.length; i++);
        if (userGuess === userArr[i]) {
            alert("you can't do that");
        } 
    
        else {
            for (i = 0; i < randomWord.length; i++);    
            userArr.push(userGuess);
            if (userGuess === randomWord[i]) {
                (answerArr[i] = userGuess);
                remainingLetters--;
            };
        
            loseAmt--;
            document.getElementById("remain").innerHTML = loseAmt;
           document.getElementById("used").innerHTML = userArr;
            document.getElementById("used").innerHTML = userArr;
console.log(userGuess)           
}
//Put "else" logic here if loseAmt is 0

}
