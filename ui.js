import { getComputerChoice, playRound, userChoice } from "./game.js";
let result= document.querySelector(".result");
let playerchoices= document.querySelectorAll(".playerchoices");
//iterate through the choice buttons
playerchoices.forEach(choice =>{
    choice.addEventListener("click",() =>{
        player = choice.textContent;
        getComputerChoice();
        player.textContent = `Player Selection: ${userChoice}`
        computer.textContent = `Computer Selection : ${getComputerChoice}`
        result.textContent = `Result : ${playRound}`
    })
});
