// caching DOM elements
let userScore = 0;
let computerScore = 0;
let userComputerTie = 0;
const userScore_span = document.getElementById("won");
const computerScore_span = document.getElementById("lost");
const userComputerTie_span = document.getElementById("tie");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];  
}
/* function to update number of wins */
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}
/* function to update number of ties */
function tie(){
    userComputerTie++;
    userComputerTie_span.innerHTML = userComputerTie;
}
/* function to update number of losts */
function lost(){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}
// computer choice print out
function game(userChoice){
    const computerChoice = getComputerChoice();
    const result = userChoice + computerChoice;
    // id else loop for checking the results
    if(result === 'rockscissors' ){
   win();
  document.getElementById("computerChoice1").innerHTML= computerChoice;
   } else if(result === 'paperrock'){
    win();
  document.getElementById("computerChoice1").innerHTML= computerChoice;
   }
   else if(result === 'scissorspaper'){
   win();
   document.getElementById("computerChoice1").innerHTML= computerChoice;
  }
  else if(result === 'paperpaper'){
    tie();
     document.getElementById("computerChoice1").innerHTML= computerChoice;
   }
   else if(result === 'rockrock'){
    tie();
     document.getElementById("computerChoice1").innerHTML= computerChoice;
   }
   else if(result === 'scissorsscissors'){
    tie();
     document.getElementById("computerChoice1").innerHTML= computerChoice;
   }
   else if(result === 'rockpaper'){
    lost();
     document.getElementById("computerChoice1").innerHTML= computerChoice;
   }
   else if(result === 'scissorsrock'){
    lost();
     document.getElementById("computerChoice1").innerHTML = computerChoice;
   }
   else if (result === 'paperscissors'){
    lost();
     document.getElementById("computerChoice1").innerHTML = computerChoice;
   }
  }
// adding event listeners to buttons
function mian(){
rock_div.addEventListener("click", function(){
game("rock");
});

paper_div.addEventListener("click", function(){
    game("paper");
    });

scissors_div.addEventListener("click", function(){
            game("scissors");
        });    
    }
    mian();