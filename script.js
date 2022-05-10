
// The DOM
let UserWins=0;
let ComputerWins=0; 

let res = document.querySelector('.result');
let C_Score= document.querySelector('.ComputerWins');
let P_Score= document.querySelector('.PlayerWins');
let center = document.querySelector('.center-box');
let endScreen = document.querySelector('.endScreen');
let EndMessage = document.querySelector('.EndMessage');

let computer_P = document.querySelector('#C_img');
let U_choice = document.querySelector('#U_pic');

let R = document.querySelector('.Results');
let S = document.querySelector('.Selection');





const rocks = document.querySelector('.rock');
    
    rocks.addEventListener('click',()=>{
            let UW =UserWins;
            let CW =ComputerWins;
            let input= rocks.className;
           
            if(UW<5 && CW<5){
                userPlay(input);
                Game(input,res);
            } 
    });

    const papers = document.querySelector('.paper');
    
    papers.addEventListener('click',()=>{
            let UW =UserWins;
            let CW =ComputerWins;
            let input= papers.className;
           
            if(UW<5 && CW<5){
                userPlay(input);
                Game(input,res);
            } 
    });

    const scissors = document.querySelector('.scissors');
    
    scissors.addEventListener('click',()=>{
            let UW =UserWins;
            let CW =ComputerWins;
            let input= scissors.className;
           
            if(UW<5 && CW<5){
                userPlay(input);
                Game(input,res);
            } 
    });




   

function Game(input,res){ 
  
            let Comp=computerPlay();
            let result= PlayRound(Comp,input);
    
            if(result==1){
                UserWins++;
            P_Score.textContent=`${UserWins}`;
                res.textContent='You Win';
            }else if(result==-1){
                ComputerWins++;
                res.textContent='You Lose';
                C_Score.textContent=`${ComputerWins}`;
            }else{
             res.textContent='Tie';
            }
            if(ComputerWins>=5 || UserWins>=5) replay();

}

function computerPlay(){
        let randomNumber= Math.round(Math.random()*2);
        
        if(randomNumber==0){
            computer_P.src="./Images/Rock.png" ;
            return 'rock';
        } 
        else if(randomNumber==1){
            computer_P.src="./Images/Paper.png";
            return 'paper';
        }
        else{
            computer_P.src="./Images/Scissors.png";
            
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

function userPlay(selection){
    
    switch(selection){
        case 'rock':
            U_choice.src="./Images/Rock.png" ;
            break;
        case 'paper':
            U_choice.src="./Images/Paper.png" ;
            break;
        case 'scissors':
            U_choice.src="./Images/Scissors.png" ;
            break;

    }
   

}

function checkResult(){
    if(UserWins>ComputerWins)
{
EndMessage.textContent='Game Over You Won';
}
else if(ComputerWins>UserWins){
EndMessage.textContent='Game Over You Lost';
 }

}

function replay(){
  
    R.style.display='none';
    center.style.display='none';
    S.style.display='none';
    endScreen.style.display='flex';
    checkResult();
}

function restart(){
    UserWins=0;
    ComputerWins=0;
    P_Score.textContent=`${UserWins}`;
    C_Score.textContent=`${ComputerWins}`;
    endScreen.style.display='none';
    center.style.display = 'none';
    R.style.display='flex';
    S.style.display='flex';
    U_choice.src="./Images/Qmark.png";
    computer_P.src="./Images/Qmark.png";
   
    
}


