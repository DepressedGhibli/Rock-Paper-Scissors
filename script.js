function getComputerChoice(){
        let number =  Math.floor((Math.random() * 3))
    if(number == 0){
        return "rock"
    }
    else if(number == 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

let compSelection = getComputerChoice()

let results;

let win = 0, lose = 0, times = 0;

function playRound(a, b){
    
    if (times < 5){
        if (a == "rock" && b == "scissors") 
    { 
        win++
        times++
        results = "You Win! Rock beats Scissors"
    }
    else if (a == "paper" && b == "rock") 
    {
        win++
        times++
        results = "You Win! Paper beats Rock"
    }
    else if (a == "scissors" && b == "paper") 
    {
        win++
        times++
        results = "You Win! Scissors beats Paper"

    }
    else if (a == "paper" && b == "scissors") 
    {
        lose++
        times++
        results = "You Lose! Scissors beats Paper"
    }
    else if (a == "rock" && b == "paper") 
    {
        lose++
        times++
        results = "You Lose! Rock beats Scissors"
    }
    else if (a == "scissors" && b == "rock") 
    {
        lose++
        times++
        results = "You lose! Rock beats Scissors"
    }
    else if (a == b){
        times++
        results = "It's a Tie!"
    }
    computerScore.textContent= `computer score: ${lose}`
    playerScore.textContent= `Player score: ${win}`
}
    if (times > 4){
        if (lose>win){
            results = "GAME OVER - YOU LOSE"
            header.style.color = 'red';
        }
        else if (win>lose){
            results = "GAME OVER - YOU WIN"
            header.style.color = 'green';
        }
        else{
            results = "GAME OVER - IT'S A TIE"
            header.style.color = 'yellow';
        }
    }
    header.textContent = results
    return results
}

const header = document.querySelector('h1');
const computerChoice = document.querySelectorAll('p')[0]
const playerChoice = document.querySelectorAll('p')[1]
const computerScore = document.querySelectorAll('p')[2]
const playerScore= document.querySelectorAll('p')[3]

const selections = document.querySelectorAll('button')

selections.forEach( (button) => {button.addEventListener("click",() => {
    if (times < 5 ){
    let PlayerChoice = button.id;
    playRound(PlayerChoice,getComputerChoice())
    computerChoice.textContent = `Computer choice = ${compSelection}`
    playerChoice.textContent =`Player choice = ${button.id}` 
    }
})    
})

