
let choices =  {
    paper: "paper",
    scissors: "scissors",
    rock: "rock"
}

/*Get computer choice*/
function getComputerChoice(choices) {
    let computerChoice = Object.keys(choices);
    let randomComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return `Computer choice : ${randomComputerChoice}`;
}
console.log(getComputerChoice(choices));


/*Get player choice*/
function userChoice() {
    
    if (userInput === "paper" ||userInput === "scissors"||userInput=== "rock" ) {
        return `Player choice : ${userInput}`;
}else{
    return "Please use valid matrix"
}
}
let userInput = prompt("please enter you chocie: ")
console.log(userChoice());

/*Play a round*/
function  playRound(userGuess, computerGuess){
    if (userGuess === computerGuess ){
        return "It's a Tie"; 
    } 
    if (userGuess === "rock"){
        if (computerGuess === "paper"){
            return "You Lose";
        }else{
            return "You Win";
        }
    }
    if (userGuess === "paper"){
        if (computerGuess === "scissors"){
            return "You Lose";
        }else{
            return "You Win";
        }
    }
    if (userGuess === "scissors"){
        if (computerGuess === "rock"){
            return "You Lose";
        }else{
            return "You Win";
        }
    }
}
let userGuess =  userChoice();
let computerGuess =  getComputerChoice(choices);
console.log(playRound(userGuess, computerGuess));          
