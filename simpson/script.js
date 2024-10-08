let gameSeq=[]
let userSeq=[]
let start =false;
let level=0;
let btns=["yellow", "red", "blue","green"];
let h2=document.querySelector('h2');
document.addEventListener('keydown',function(){
    if(start===false){
        start=true;
        levelUp();
    }
})

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`
    let rand=Math.floor(Math.random()*4);
    let randc=btns[rand];
    gameSeq.push(randc);
    let randbtn=document.querySelector(`.${randc}`);
    flash(randbtn);
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250) //1000=1sec
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150)
}
function btnPress(){
    console.log("Pressed");
    let btn =this;
    userflash(btn);
    let userC=btn.getAttribute('id');
    userSeq.push(userC);
    checkAns(userSeq.length-1);
}

let allbtns= document.querySelectorAll('.box');
for(btn of allbtns){
    btn.addEventListener('click',btnPress)
}

function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b> ${level-1}</b> <br> Press any key to start again`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}