
var wins = 0;
var losses = 0;
var userScore = 0;
var targetScore = 0;

var crystalRed = 0;
var crystalBlue = 0;
var crystalYellow = 0;
var crystalClear = 0;

function gameStart() {
    
    targetScore = Math.floor(Math.random()* 100+19);
    $("#game-target-score").text(targetScore);

    crystalRed = Math.floor(Math.random()* 12+1);
    crystalBlue = Math.floor(Math.random()* 12+1);
    crystalYellow = Math.floor(Math.random()* 12+1);
    crystalClear = Math.floor(Math.random()* 12+1);

    userScore = 0;
    $("#game-score").text(userScore);

    $("#losses").text(losses);
    $("#wins").text(wins);
};

function winningConditions() {
    $("#game-score").text(userScore);
    if (userScore > targetScore) {
        console.log("YOU LOST!!!");
        losses++;
        gameStart();
    }
    if (userScore === targetScore) {
        console.log ("YOU WON!!!");
        wins++;
        gameStart();
    }
}

window.onload = function crystalClicks() {
    gameStart();
    
    $("#crystal-red").on('click', function() {
        console.log("red clicked!");
        userScore = userScore + crystalRed;
        console.log(userScore);
        winningConditions();
    })
    
    $("#crystal-blue").on('click', function() {
        console.log("blue clicked!");
        userScore = userScore + crystalBlue;
        console.log(userScore);
        winningConditions();
    })
    
    $("#crystal-yellow").on('click', function() {
        console.log("yellow clicked!");
        userScore = userScore + crystalYellow;
        console.log(userScore);
        winningConditions();
    })

    $("#crystal-clear").on('click', function() {
        console.log("clear clicked!");
        userScore = userScore + crystalClear;
        console.log(userScore);
        winningConditions();
    })
    
}
