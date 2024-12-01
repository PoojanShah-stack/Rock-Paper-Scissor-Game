let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++
        compScorePara.innerText = compScore 
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
    if(compScore === 10){
        msg.innerText = "Game Over! Computer wins"
        resetGame()
    }
    else if(userScore === 10){
        msg.innerText = "Game Over! You wins"  
        resetGame()
    }
}

function resetGame(){
    compScore = 0
    userScore = 0
    updateScores();
    setTimeout(() => {
        startNewGame();
    }, 5000);
}

function updateScores() {
    document.getElementById('computer-score').innerText = compScore;
    document.getElementById('user-score').innerText = userScore;
}
function startNewGame() {
    msg.innerText = "New game started!";}

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random]
}


const playGame = (userChoice)=>{
   console.log("User Choice :",userChoice)
   const computerChoice = genCompChoice()
   console.log("Computer Choice :",computerChoice)

   if(userChoice === computerChoice){
    console.log("It's a tie")
    msg.innerText = "It's a tie"
    msg.style.backgroundColor = "#081b31"
   }
   else{
    let userWin = true
    if(userChoice === "rock"){
         userWin = computerChoice === "paper" ? false : true
   }else if(userChoice ==="paper"){
       userWin = computerChoice === "scissors" ? false : true
   }else{
    userWin = computerChoice === "rock" ? false : true
   }
   showWinner(userWin,userChoice,computerChoice)
}}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userChoice = choice.getAttribute("id");
      playGame(userChoice);

    })
})