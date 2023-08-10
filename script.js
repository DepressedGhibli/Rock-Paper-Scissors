function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    let computerChoice

    if (choice == 0){
        computerChoice = "rock"
    }
    else if (choice ==1){
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Your move: ")
    return playerChoice;
}

let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()



function playRound(a, b){
    b = b.toLowerCase()

    if (a == 'rock' && b == 'paper'){
        console.log("You Win! Paper beats Rock")
    }
    else if (a == 'scissors' && b == 'rock'){
        console.log("You Win! Rock beats Scissors")
    }
    else if (a == 'paper' && b == 'scissors'){
        console.log("You Win! Scissors beats Paper")
    }
    else if (a == 'rock' && b == 'scissors'){
        console.log("You Lose! Rock beats scissors")
    }
    else if (a == 'scissors' && b == 'paper'){
        console.log("You Lose! Scissors beats Paper")
    }
    else if (a == 'paper' && b == 'rock'){
        console.log("You Lose! Paper beats Rock")
    }
    else {
        console.log("It's a tie!")
    }
}

playRound(computerSelection, playerSelection)

