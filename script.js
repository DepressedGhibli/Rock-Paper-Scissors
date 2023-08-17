function getComputerChoice(){
    let number =  Math.floor((Math.random() * 3))
    if(number == 0){
        console.log("rock")
        return "rock"
    }
    else if(number == 1){
        console.log("paper")
        return "paper"
    }
    else {
        console.log("scissors")
        return "scissors"
    }
}

function getPlayerChoice(){
    return prompt("Your move: ").toLowerCase()
}

function playRound(a, b){
    
    if (a == "rock" && b == "scissors") 
    {
        return "You Win!"
    }
    else if (a == "paper" && b == "rock") 
    {
        return "You Win!"
    }
    else if (a == "scissors" && b == "paper") 
    {
        return "You Win!"
    }
    else if (a == "paper" && b == "scissors") 
    {
        return "You Lose!"
    }
    else if (a == "rock" && b == "paper") 
    {
        return "You Lose!"
    }
    else if (a == "scissors" && b == "rock") 
    {
        return "You Lose!"
    }
    else if (a == b){
        return "It's a Tie!"
    }
}


function game (playRound){
   
    let computerScore = 0
    let playerScore = 0

    for(i =0; i < 5; i++){

        let round = playRound(getPlayerChoice(), getComputerChoice())

        if (round == "You Win!"){
            playerScore++
        }
        else if(round == "You Lose!"){
                computerScore++
            }
    }

    if (computerScore > playerScore){
        return "computer wins"
   }
   else if (playerScore > computerScore){
       return "Player wins"
   }
   else{
    return "Player  Tie!"
   }

}

console.log(game(playRound))