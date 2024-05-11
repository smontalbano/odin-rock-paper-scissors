let userScore = 0
let compScore = 0
playGame()

function playGame(){
    while(userScore < 5 && compScore < 5){
        let userChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        playRound(userChoice, compChoice);
        if (userScore == compScore){
            alert("Your score: " + userScore + " Computer Score: " + compScore + ". It's a tie!")
        } else if (userScore > compScore){
            alert("Your score: " + userScore + " Computer Score: " + compScore + ". You're winning!")
        } else {
            alert("Your score: " + userScore + " Computer Score: " + compScore + ". The computer is winning!")
        }
    }
    if (userScore > compScore){
        return alert("Your score: " + userScore + " Computer Score: " + compScore + ". You win!")
    } else if (userScore < compScore){
        return alert("Your score: " + userScore + " Computer Score: " + compScore + ". The computer wins!")
    }
}

function playRound(user, comp){

    if (user == comp) {
        alert("It's a draw!")
    } else if (user == "rock" && comp == "scissors"){
        alert(user[0].toUpperCase() + user.slice(1) + " beats " + comp + ". You Win!")
        userScore++;
    } else if (user == "rock" && comp == "paper"){
        alert(comp[0].toUpperCase() + comp.slice(1) + " beats " + user + ". Computer Wins!")
        compScore++;
    } else if (user == "paper" && comp == "rock"){
        alert(user[0].toUpperCase() + user.slice(1) + " beats " + comp + ". You Win!")
        userScore++;
    } else if (user == "paper" && comp == "scissors"){
        alert(comp[0].toUpperCase() + comp.slice(1) + " beats " + user + ". Computer Wins!")
        compScore++;
    } else if (user == "scissors" && comp == "paper"){
        alert(user[0].toUpperCase() + user.slice(1) + " beats " + comp + ". You Win!")
        userScore++;
    } else if (user == "scissors" && comp == "rock"){
        alert(comp[0].toUpperCase() + comp.slice(1) + " beats " + user + ". Computer Wins!")
        compScore++;
    } else {
        alert("Bad input")
    }
}

function getHumanChoice(){
    let userChoice = prompt("Choose: Rock, Paper, or Scissors:")
    return userChoice.toLowerCase();
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
