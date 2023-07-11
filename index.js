/*const prompt = require("prompt-sync")({ sigint: true });*/
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const result = document.querySelector(".result")


/*Get computer choice*/
let choices = ["paper","scissors","rock"]
function getComputerChoice(choices) {
   
    let randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomComputerChoice;
}
getComputerChoice(choices);

/*Play a round*/
function playRound(userGuess, computerGuess) {
     let result = ""
    if (userGuess === computerGuess) {  
        result = (`it's a Tie \n \ You Both Chose: ${computerGuess}`)  
    } else if ((userGuess === "rock" && computerGuess === "paper") ||
        (userGuess === "scissors" && computerGuess === "rock") ||
        (userGuess === "paper" && computerGuess === "scissors")) {  
        result = (`You Lose \n \  Computer chose : ${computerGuess} `) 
    } else if ((userGuess === "paper" && computerGuess === "rock") ||
        (userGuess === "rock" && computerGuess === "scissors") ||
        (userGuess === "scissors" && computerGuess === "paper")) {
        result = (`You Win \n \ Computer chose :${computerGuess}`)           
    }
    document.getElementById('result').innerText = result.toLowerCase();
}
let computerGuess = getComputerChoice(choices);

/*Add button functionality*/
rock.addEventListener("click", () =>{
    let userGuess = "rock";
    let computerGuess = getComputerChoice(choices);
    playRound(userGuess, computerGuess)
});

paper.addEventListener("click", () =>{
    let userGuess = "paper";
    let computerGuess = getComputerChoice(choices);
    playRound(userGuess, computerGuess)
})

scissors.addEventListener("click", () =>{
    let userGuess = "scissors";
    let computerGuess = getComputerChoice(choices);
    playRound(userGuess, computerGuess)
})



