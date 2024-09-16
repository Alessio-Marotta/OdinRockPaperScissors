let humanscore = 0;
let computerscore = 0;
function getComputerChoice(){
let zufal = Math.floor(Math.random() * 10);
let computerchoice 
if (zufal > 6){
    computerchoice = "paper"
    console.log(computerchoice)
}
else if (zufal <= 3){
        computerchoice = "rock"
        console.log(computerchoice)
}
else if ( zufal > 3 && zufal <= 6 ){
    computerchoice = "scissor"
    console.log(computerchoice)
 }
 return(computerchoice)
}
function getHumanChoice() {
let humanchoice = prompt("Please enter your choice(rock, paper or scissor)").toLowerCase();
console.log(humanchoice)
return(humanchoice)
}
function playRound(humanchoice,computerchoice){
if (humanchoice === "rock"){
    if (computerchoice === "rock"){
        console.log("draw")
    }
    else if (computerchoice === "paper"){
        console.log("You lose(Paper beats Rock)")
        computerscore++
    }
    else if (computerchoice === "scissor") {
        console.log("you winn (Rock beats Scissor)")
        humanscore++ 
    }
}
else if (humanchoice === "paper"){
    if (computerchoice === "rock"){
        console.log("you winn(Paper beats Rock)")
        humanscore++
    }
    else if (computerchoice === "paper"){
        console.log("draw")
    }
    else if (computerchoice === "scissor") {
        console.log("You lose(Scissor beats Paper)")
        computerscore++
    }
}
else if (humanchoice === "scissor"){
    if (computerchoice === "rock"){
        console.log("You lose(Rock beats Scissor)")
        computerscore++
    }
    else if (computerchoice === "paper"){
        console.log("you winn (Scisor beats Paper)")
        humanscore++
    }
    else if (computerchoice === "scissor") {
        console.log("draw")
    }
}
else {
    console.log("Please enter a valit anser (rock, paper or scissor) ")
}
console.log(humanscore)
console.log(computerscore)
}
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Final score
    console.log(`Final Score You: ${humanscore}, Computer: ${computerscore}`);
}

let rounds = 5;
playGame(rounds);
