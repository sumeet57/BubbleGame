function start(){
    let randhit;
let score=0;
let count = 96;
let time = 60;
let createelem = "";
function create(){

if(window.innerWidth < 750){
    for(var i=1;i<73;i++){
        var rand = Math.floor(Math.random()*10);
        createelem += `<h1 class="elem">${rand}</h1>`;
    }
}
if(window.innerWidth > 750){
    for(var i=1;i<92;i++){
        var rand = Math.floor(Math.random()*10);
        createelem += `<h1 class="elem">${rand}</h1>`;
    }
}
document.querySelector(".contbody").innerHTML = createelem;

}
function timer(){
var createtime=setInterval(()=>{
if(time>0){
time--;
document.getElementById("time").textContent=time;
}else{
    clearInterval(createtime);
    document.querySelector(".contbody").innerHTML = `game over<br>
    <p class="scoreb">Your score : ${score-1}</p><br>
    `;
}
},1000)
}
function randomhit(){
var rand = Math.floor(Math.random()*10);
randhit = rand
document.querySelector("#hit").textContent=randhit;
}
function scorefn(){
    document.querySelector("#score").textContent = score;
    score++;
}



document.querySelector(".contbody").
addEventListener("click", (dets)=>{
    if(Number(dets.target.textContent)===randhit){
        createelem="";
        scorefn();
        randomhit();
        create();
    }
});
scorefn();
randomhit();
timer();
create();
}

start();






