
// The DOM
let UserWins=0;
let ComputerWins=0; 

let res = document.querySelector('.result');
let C_Score= document.querySelector('.ComputerWins');
let P_Score= document.querySelector('.PlayerWins');



const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
    let UW =UserWins;
    let CW =ComputerWins;
    let input= button.className;
   
    if(UW<5 && CW<5){
        userPlay(input);
        Game(input,res);
    } 
    
    });
});


   

function Game(input,res){ 
  
            let Comp=computerPlay();
            let result= PlayRound(Comp,input);
    
            if(result==1){
                UserWins++;
            P_Score.textContent=`Player Score: ${UserWins}`;
                res.textContent='You Win';
            }else if(result==-1){
                ComputerWins++;
                res.textContent='You Lose';
                C_Score.textContent=`Computer Score: ${ComputerWins}`;
            }else{
             res.textContent='Tie';
            }
            if(ComputerWins>=5 || UserWins>=5) checkResult();
        
           
}

function computerPlay(){
        let randomNumber= Math.round(Math.random()*2);
        let computer_P = document.querySelector('#C_img');
        if(randomNumber==0){
            computer_P.src='./Images/Rock.png';
            return 'rock';
        } 
        else if(randomNumber==1){
            computer_P.src='./Images/Paper.png';
            return 'paper';
        }
        else{
            computer_P.src='./Images/Scissors.png';
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

function userPlay(selection){
    let U_choice = document.querySelector('#U_pic');
    switch(selection){
        case 'rock':
            U_choice.src='./Images/Rock.png';
            break;
        case 'paper':
            U_choice.src='./Images/Paper.png';
            break;
        case 'scissors':
            U_choice.src='./Images/Scissors.png';
            break;

    }
   

}

function checkResult(){
    if(UserWins>ComputerWins)
{
res.textContent='Game Over,You Won';
document.getElementById('#endScreen').style.display='flex';
 
}
else if(ComputerWins>UserWins){
res.textContent='Game Over,You Lost';
document.getElementById('#endScreen').style.display='flex';
 
 }

}

function replay(){

}


