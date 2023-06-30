const prompt = require("prompt-sync")({ sigint: true });
let choices = {
    paper: "paper",
    scissors: "scissors",
    rock: "rock"
}

/*Get computer choice*/
function getComputerChoice(choices) {
    let computerChoice = Object.keys(choices);
    let randomComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randomComputerChoice;
}
getComputerChoice(choices);


/*Get player choice*/
function userChoice() {

    if (userInput === "paper" || userInput === "scissors" || userInput === "rock") {
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
    console.log(`computer choice : ${computerChoices}\n\
user choice : ${userChoiceS}`)
}
showChoices()

/*Play a round*/
function playRound(userGuess, computerGuess) {
    if (userGuess === computerGuess) {
        return " it's a Tie";
    } else if ((userGuess === "rock" && computerGuess === "paper") ||
        (userGuess === "scissors" && computerGuess === "rock") ||
        (userGuess === "paper" && computerGuess === "scissors")) {
        return "You Lose";
    } else if ((userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "rock" && computerGuess === "scissors") ||
        (userGuess === "scissors" && computerGuess === "paper")) {
        return "You Win";
    }
}
let userGuess = userChoice();
let computerGuess = getComputerChoice(choices);
console.log(playRound(userGuess, computerGuess));          
