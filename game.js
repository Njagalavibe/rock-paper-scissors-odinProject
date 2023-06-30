<<<<<<< HEAD
const prompt = require("prompt-sync")({ sigint: true });
let choices = {
=======
const prompt=require("prompt-sync")({sigint:true});
// checkout https://www.geeksforgeeks.org/javascript-is-showing-reference-error-prompt-is-not-defined/
// javascript is designed to run in the browser (client), so in the browser the prompt
// funciton exists on the window object
// to run the game server side( as a script/not in the browser), we use node js (serverside version on js)
// make sure you have node installed
// in terminal run, 
// node game.js

let choices =  {
>>>>>>> 7dc30449a32a0e80e9d66fa201078517a1db564e
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
