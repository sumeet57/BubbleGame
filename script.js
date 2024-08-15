function start() {
  
  document.querySelector(".table").style.display = "none";
  document.querySelector(".table").style.opacity = "0";
  let score = 0;
  let body = document.querySelector(".contbody");
  let score_display = document.querySelector("#score");
  let time = 60;
  let time_display = document.getElementById("time");
  score_display.innerText =score;
  time_display.innerText = time;
  body.style.filter = "blur(0px)";
let temp_to_point = localStorage.getItem("hp");

if(temp_to_point == null){
  localStorage.setItem("hp",0);
}
  let n;
  function get_numbers() {
    body.innerText = '';
    for(let i = 0;i<49;i++){
      n = document.createElement("h1");
      n.textContent = Math.floor(Math.random()*10);
      body.appendChild(n);
      n=0
    }
  }

  get_numbers();

  
  
  let a = setInterval(()=>{
    if(time == 0){
      document.querySelector(".table").style.display = "flex";
      document.querySelector(".table").style.opacity = "1";
      document.querySelector(".table div p").innerText = score;
      let high_point = localStorage.getItem("hp");
      if(high_point < score){
        localStorage.setItem("hp",score);
      }
      document.querySelector(".table h4 span").innerText = high_point;
      clearInterval(a);

      body.style.filter = "blur(5px)";
      body.innerText = '';
      
    }
    time_display.innerText = time;
    time--;
  },1000);

  function get_score(){
    score++;
    score_display.innerText = score;
  }


  let hit;


  function get_hit(){
  hit = Math.floor(Math.random()*10);
  let hit_display = document.getElementById("hit");
  hit_display.innerText = hit;
  }

  let main_body = document.querySelector(".contbody");

  main_body.addEventListener("click",(e)=>{
    if(hit == e.target.innerText){
      get_hit();
      get_numbers();
      get_score();
    }
  })


  get_hit();
}

start();