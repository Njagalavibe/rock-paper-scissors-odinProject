
/*const prompt = require("prompt-sync")({ sigint: true });*/
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

console.log(playRound(userGuess, computerGuess));  






