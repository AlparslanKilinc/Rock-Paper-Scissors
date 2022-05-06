

function Game(){ 
    let UserWins=0;
    let ComputerWins=0; 
   

   while(UserWins<5 && ComputerWins <5){ 
       let Player= UserPlay().toLowerCase();
       let Comp=computerPlay();
       let result= PlayRound(Comp,Player);
       console.log(result[0]);
       if(result[1]===1){
           UserWins++;
       }else if(result[1]===-1){
           ComputerWins++;
       }else{
           i--;
       }
       console.log('Your Wins:'+UserWins);
       console.log('Computer Wins:'+ComputerWins);
    }

    if(UserWins>ComputerWins){
     return 'Game Over , You Won';
    }
    else if (ComputerWins>UserWins){
     return 'Game Over ,You Lost !'
    }else return 'Tie Game';
}

function UserPlay(){
    let options=['rock','scissors','paper'];
    
    /// Catch Errors
    try{
        if(!options.includes(input)) throw 'notOption';
    }catch(e){
        console.log('Input has to be a Rock,Scissors or Paper');
        return UserPlay();
    }
        return input;
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
