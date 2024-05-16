let userScore = 0
let compScore = 0

const container = document.querySelector(".container");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const title = document.querySelector(".title");
const scoreCard = document.querySelector(".score");
const restartButton = document.createElement("button");
restartButton.textContent = "Restart";



rockButton.addEventListener("click", () => {
    const userChoice = "rock";
    const compChoice = getComputerChoice();
    const winLose = playRound(userChoice, compChoice);
    if (winLose == "tie"){
        title.textContent = "It's a tie!"
    } else if (winLose == "win"){
        title.textContent = userChoice[0].toUpperCase() + userChoice.slice(1) + " beats " + compChoice + ". You Win!"
    } else if (winLose == "lose"){
        title.textContent = compChoice[0].toUpperCase() + compChoice.slice(1) + " beats " + userChoice + ". Computer Wins!"
    }
    
    scoreCard.textContent = "Your Score: " + userScore + " Computer Score: " + compScore;
    if (userScore >= 5 || compScore >= 5){
        restart();
    }
})

paperButton.addEventListener("click", () => {
    const userChoice = "paper";
    const compChoice = getComputerChoice();
    const winLose = playRound(userChoice, compChoice);
    if (winLose == "tie"){
        title.textContent = "It's a tie!"
    } else if (winLose == "win"){
        title.textContent = userChoice[0].toUpperCase() + userChoice.slice(1) + " beats " + compChoice + ". You Win!"
    } else if (winLose == "lose"){
        title.textContent = compChoice[0].toUpperCase() + compChoice.slice(1) + " beats " + userChoice + ". Computer Wins!"
    }

    scoreCard.textContent = "Your Score: " + userScore + " Computer Score: " + compScore;
    if (userScore >= 5 || compScore >= 5){
        restart();
    }
})

scissorsButton.addEventListener("click", () => {
    const userChoice = "scissors";
    const compChoice = getComputerChoice();
    const winLose = playRound(userChoice, compChoice);
    if (winLose == "tie"){
        title.textContent = "It's a tie!"
    } else if (winLose == "win"){
        title.textContent = userChoice[0].toUpperCase() + userChoice.slice(1) + " beats " + compChoice + ". You Win!"
    } else if (winLose == "lose"){
        title.textContent = compChoice[0].toUpperCase() + compChoice.slice(1) + " beats " + userChoice + ". Computer Wins!"
    }
    scoreCard.textContent = "Your Score: " + userScore + " Computer Score: " + compScore;
    if (userScore >= 5 || compScore >= 5){
        restart();
    }
})

restartButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    restartButton.remove();
    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);
    scoreCard.textContent = "Your Score: " + userScore + " Computer Score: " + compScore;
    title.textContent = "Select to start"
})
function playRound(user, comp){

    if (user == comp) {
        return "tie";
    } else if (user == "rock" && comp == "scissors"){
        userScore++;
        return "win";
    } else if (user == "rock" && comp == "paper"){
        compScore++;
        return "lose";
    } else if (user == "paper" && comp == "rock"){
        userScore++;
        return "win";
    } else if (user == "paper" && comp == "scissors"){        
        compScore++;
        return "lose";
    } else if (user == "scissors" && comp == "paper"){        
        userScore++;
        return "win";
    } else if (user == "scissors" && comp == "rock"){
        compScore++;
        return "lose";
    } else {
        alert("Bad Input")
    }
}

function getComputerChoice(){
    let compChoice = ((Math.random() * 3) + 1)
    compChoice = parseInt(compChoice)
    if (compChoice === 1){
        compChoice = "rock"
    }else if (compChoice === 2){
        compChoice = "paper"
    } else {
        compChoice = "scissors"
    }
    return compChoice;
}

function restart(){
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    
    container.appendChild(restartButton);

    if (userScore > compScore){
        title.textContent = "You Won!"
    } else {
        title.textContent = "You Lost!"
    }
}