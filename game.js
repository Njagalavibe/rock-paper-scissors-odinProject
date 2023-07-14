<<<<<<< HEAD
/*const prompt = require("prompt-sync")({ sigint: true });*/
=======
const prompt = require("prompt-sync")({ sigint: true });
>>>>>>> master
let choices = ["paper","scissors","rock"]
/*Get computer choice*/
function getComputerChoice(choices) {
   
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomComputerChoice;
}
(getComputerChoice(choices));


/*Get player choice*/
function userChoice() {

    if( (userInput == "paper" )||
        (userInput == "scissors" )|| 
        (userInput == "rock")) {
        return userInput;

    } else {
        return "Please use valid matrix"
    }
}
let userInput = prompt("please enter you chocie: ")
userChoice();

/*return choices*/
function showChoices() {
    let computerChoices = getComputerChoice(choices)
    let userChoiceS = userChoice()
    console.log(`computer choice : ${computerChoices}`)
}
showChoices()

/*Play a round*/
function playRound(userGuess, computerGuess) {
    if (computerGuess === userGuess) {
        return " it's a Tie";
    } else if ((computerGuess == "paper" && userGuess == "rock") ||
        (computerGuess == "rock" &&  userGuess == "scissors") ||
        (computerGuess == "scissors" && userGuess == "paper")) {
        return "You Lose";
    } else  if (( userGuess == "paper" && computerGuess == "rock" ) ||
    (userGuess == "paper" && computerGuess == "rock" ) ||
    (userGuess == "scissors" &&  computerGuess == "paper")) {
    return "You Win";
    }
}
let userGuess = userChoice();
let computerGuess = getComputerChoice(choices);
<<<<<<< HEAD
console.log(playRound(userGuess, computerGuess));  


export {choices,getComputerChoice,userChoice,showChoices,playRound};
=======
console.log(playRound(userGuess, computerGuess)); 


//Will add playing more rounds(5 rounds each stake) after i work on the ui as i consider that a more excitng chaalenge
/*
function fiveRounds(){
    computerScore=0;
    playerScore=0;
    for (let round=0; round<=5;round++){
        playRound(userGuess, computerGuess) 
    }
    
}
console.log(fiveRounds())
*/



>>>>>>> master
