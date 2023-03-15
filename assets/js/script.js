let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("won");
const computerScore_span = document.getElementById("lost");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice(){
    const choices = {"rock","paper","scissors"};
    const randomNumber = Math.floor(Math.random()*3);
}
function win(){
    userScore++;
    userScore_span.innerHTML = won;

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case"rockscissors":
        case"paperrock":
        case"sissorsrock":
        win();
        break;
        case"rockpaper":
        case"paperscissors":
        case"scissorsrock":
        lost();
        break;
        case"rockrock":
        case"paperpaper":
        case"scissorsscissors":
        draw();
        break;


    }
}

function mian(){
rock_div.addEventListener("click", function(){
game("rock");
})

paper_div.addEventListener("click", function(){
    game("paper");
    })

scissors_div.addEventListener("click", function(){
            game("scissors");
        })    
    }
    mian();