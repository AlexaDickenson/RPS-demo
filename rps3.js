const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')

let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=>{
userChoice= e.target.id
userChoiceDisplay.innerHTML=userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice() {
const randomNumber= Math.floor(Math.random()*3) +1

if (randomNumber===1){
computerChoice= 'rock'
}

if (randomNumber===2){
    computerChoice= 'paper'
    }

if (randomNumber===3){
        computerChoice= 'scissors'
        }
computerChoiceDisplay.innerHTML= computerChoice
}

function getResult(){
if (computerChoice === userChoice) {
    console.log("It's a tie!");
    result= "It's a tie!";
} else if (computerChoice === "rock" && userChoice=== "scissors") {
    console.log("Computer wins.");
    result= "Computer wins!";
} else if (computerChoice === "scissors" && userChoice === "paper") {
    console.log("Computer wins.");
    result= "Computer wins!";
} else if (computerChoice === "paper" && userChoice === "rock") {
    console.log("Computer wins.");
    result= "Computer wins!";
} else if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("User wins.");
    result= "User wins!";
} else if (computerChoice === "scissors" && userChoice === "rock") {
    console.log("User wins.");
    result= "User wins!";
} else if (computerChoice === "rock" && userChoice === "paper") {
    console.log("User wins.");
    result= "User wins!";
}

    resultDisplay.innerHTML= result
}
console.log("hello");