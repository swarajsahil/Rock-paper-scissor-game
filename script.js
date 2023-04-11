// const rock=document.getElementById("rock");
// const paper=document.getElementById("paper");
// const scissor=document.getElementById("scissor");


// let rockMove=0;
// let scissorMove=1;
// let paperMove=2;

// rock.addEventListener("click",()=>{
//     let computerMove=Math.round(Math.random()*2);
//     console.log(computerMove);
//     if(computerMove===rockMove || computerMove===paperMove || computerMove===scissorMove){
//         result.innerHTML=`It's a tie! `;
//     }
//     else if(computerMove<scissorMove){
//         result.innerHTML=`You win! rock beats scissor`;
//     }
//     else if(computerMove<paperMove){
//         result.innerHTML=`You win! rock beats scissor`;
//     }
// })
const buttons=document.querySelectorAll("img");
const result=document.getElementById("result");
const myScore=document.getElementById("myScore");
const compScore=document.getElementById("compScore");
let playerCount=0;
let compCount=0;

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        // console.log("button clicked "+ btn.id+ " " + computerMove());
        let compMove=computerMove();
        let playerMove=btn.id;
        // console.log(btn.id);
        if(compMove===playerMove){
            result.innerHTML=`It's a tie! `;
        }
        else if(playerMove==='rock'&& compMove==='scissor'||
        playerMove==='paper'&&compMove==='rock'||
        playerMove==='scissor'&&compMove==='paper'){
            myScore.innerHTML=`Your score: ${++playerCount}`;
            result.innerHTML=`You win! ${playerMove} beats ${compMove}`;
        }
        else{
            result.innerHTML=`You lose! ${compMove} beats ${playerMove}`;
            compScore.innerHTML=`Computer score: ${++compCount}`;
        }
    })
})

const computerMove=()=>{
    const choices=["rock","paper","scissor"];
    let move=Math.floor(Math.random()*choices.length);
    console.log(move);
    return choices[move];
}