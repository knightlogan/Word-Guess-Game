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
var win = 0;

var winNumber = document.getElementById("winNumber");
var currentWord = document.getElementById("currentWord");
var guessRemain = document.getElementById("guessRemain");
var alreadyUsed = document.getElementById("alreadyUsed");

function startup() {
    randWord = randomTeam[Math.floor(Math.random() * randomTeam.length)];
    console.log(randomWord.toLowerCase());
    for (i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_ ";
        output = output + answerArr[i];
        loseAmt = 10;
        userArr = [];
    }

    document.getElementById("guess-string").innerHTML = output;
    output = "";
    
    document.getElementById("remain").textContent = loseAmt;

}

document.onkeyup = function play() {
    if (remainingLetters === 1) {
        alert("CONGRATULATIONS!");
        win++;
        loseAmt = 10;
        userArr = [];
       
    }
    userGuess = event.key;
    
        if (userArr.indexOf(userGuess) > -1) {
            alert("can't do that");
            return;
            
        }
            else {
                loseAmt--;
                if (randomWord.toLowerCase().indexOf(userGuess) > -1) {
                    for (i = 0; i < randomWord.length; i++)
                        if (randomWord[i].toLowerCase() === userGuess) {
                    answerArr[i] = userGuess;
                    console.log(answerArr);
                    remainingLetters--;
                    console.log(remainingLetters);
                }
            }
            }
        
        userArr.push(userGuess);
        document.getElementById("used").textContent = userArr;
        document.getElementById("guess-string").textContent = answerArr.join('');
        document.getElementById("remain").textContent = loseAmt;
        document.getElementById("win").textContent = win;

    }