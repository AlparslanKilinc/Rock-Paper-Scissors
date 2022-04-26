console.log('Welcome To Rock Paper Scissors');


let as = Game();
console.log(as);





function Game(){ 
    let UserWins=0;
    let ComputerWins=0; 
   

    for(let i=0; i<5; i++){
       let Player= UserPlay().toLowerCase();
       let Comp=computerPlay();
       let result= PlayRound(Comp,Player);
       console.log(result[0]);
       console.log('Your Wins:'+UserWins);
       if(result[1]===1){
           UserWins++;
       }else if(result[1]===-1){
           ComputerWins++;
       }
    }

    if(UserWins>ComputerWins){
     return 'Game Over , You Won';
    }
    else if (ComputerWins>UserWins){
     return 'Game Over ,You Lost !'
    }else return 'Tie Game';
    }

function UserPlay(){
        return window.prompt("Enter Your Move:");
    }

    
function computerPlay(){
        let randomNumber= Math.round(Math.random()*2);
        if(randomNumber==0) return 'rock';
        else if(randomNumber==1)return 'paper';
        else return 'scissors';
           
    }

function PlayRound(computerSelection, playerSelection){
        switch(playerSelection){
         case 'rock':
             if(computerSelection==='scissors') return ['You Win Rock Beats Scissors',1];
             else if(computerSelection==='rock') return ['Tie Round'];
             else return ['You Lose Rock Loses To Paper',-1];
             break;
     
         case 'paper':
             if(computerSelection==='rock') return ['You Win Paper Beats Rock',1];
             else if(computerSelection==='paper') return ['Tie round'];
             else return ['You Lose Paper Loses To Scissors',-1];
             break;
     
         case 'scissors':
                 if(computerSelec==='paper') return ['You Win Scissors Beats Paper',1];
                 else if(computerSelec==='scissors') return ['Tie Round'];
                 else return ['You Lose Scissors Loses to Rock',-1];
        }










  
    
   

}
