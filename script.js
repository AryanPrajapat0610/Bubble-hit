var timer = 60;
var score =0;
var hitrn =0;

document.getElementById('restart').addEventListener("click",function(){
    location.reload();
});

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
// function decreaseScore(){
//     score -= 10;
//     document.querySelector("#scoreval").textContent = score;
// }

function makeBubble(){
    var clutter = "";
    
    for(var i=1;i<=175;i++){
        var val = Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${val}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;

}

function runTimer(){
    var timeint = setInterval(function(){
        if(timer > 0 ){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<div style="display: flex; flex-direction: column; justify-content:center; align-items:center;"><h1>Game Over</h1>  <h1>Your Score : ${score} 
            </h1> `;
            

        }
    },1000)
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);  
    document.querySelector("#hitval").textContent = hitrn; 
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    //else{
    //     decreaseScore();
    //     makeBubble();
    //     getNewHit();
    // }
})



//increaseScore();
getNewHit();
runTimer();
makeBubble();