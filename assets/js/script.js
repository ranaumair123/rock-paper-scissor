let userScore = 0;
let computerScore = 0;
let userComputerTie = 0;
const userScore_span = document.getElementById("won");
const computerScore_span = document.getElementById("lost");
const userComputerTie_span = document.getElementById("tie");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")


function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}
function tie(){
    userComputerTie++;
    userComputerTie_span.innerHTML = userComputerTie;
}
function lost(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    const result = userChoice + computerChoice;
    if(result === 'rockscissors' ){
   win();
   } else if(result === 'paperrock'){
    win();
   }
   else if(result === 'scissorspaper'){
   win();
  }
  else if(result === 'paperpaper'){
    tie();
   }
   else if(result === 'rockrock'){
    tie();
   }
   else if(result === 'scissorsscissors'){
    tie();
   }
   else if(result === 'rockpaper'){
    lost();
   }
   else if(result === 'scissorsrock'){
    lost();
   }
   else if (result === 'paperscissors'){
    lost();
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