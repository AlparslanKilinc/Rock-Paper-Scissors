
// The DOM
let UserWins=0;
let ComputerWins=0; 

let res = document.querySelector('.result');

const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
       let UW =UserWins;
       let CW =ComputerWins;
       let input= button.className;
       if(UW<5 || CW<5){
        let scores=Game(input,res);
       }else{
        if(UW>CW)
        {
         res.textContent='Game Over,You Won';
        }
     else{
         res.textContent='Game Over,You Lost';
         }
       }
    });
});


/// Functions


   
 

function Game(input,res){ 
  
            let Comp=computerPlay();
            let result= PlayRound(Comp,input);
    
            if(result==1){
                UserWins++;
                res.textContent='You Win';
            }else if(result==-1){
                ComputerWins++;
                res.textContent='You Lose';
            }else{
             res.textContent='Tie';
            }
        
           
}

function computerPlay(){
        let randomNumber= Math.round(Math.random()*2);
        let computer_P = document.getElementsByClassName('comp-pic');
        if(randomNumber==0){
            computer_P.src='/Images/Rock.png';
            console.log('Computer Play: paper');
            return 'paper';
        } 
        else if(randomNumber==1){
            computer_P.src='/Images/Paper.png';
            console.log('Computer Play: Rock');
            return 'rock';
        }
        else{
            computer_P.src='/Images/Scissors.png';
            console.log('Computer Play: Scissors');
            return 'scissors';
        }
    }


function PlayRound(computerSelection, playerSelection){
        switch(playerSelection){
         case 'rock':
             if(computerSelection==='scissors') return 1;
             else if(computerSelection==='rock') return 0;
             else return -1;
            
     
         case 'paper':
             if(computerSelection==='rock') return 1;
             else if(computerSelection==='paper') return 0;
             else return -1;
            
     
         case 'scissors':
                 if(computerSelection==='paper') return 1;
                 else if(computerSelection==='scissors') return 0;
                 else return -1;
        }
    }





