function rnd(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
function newCircle(){
    const newC = document.createElement("div");
    const t = rnd(50, 300);
    newC.style.backgroundColor = `rgb(${rnd(0,255)}, ${rnd(0,255)}, ${rnd(0,255)})`;
    newC.style.position = "absolute";
    newC.style.borderRadius = "50%";
    newC.style.width= t + "px";
    newC.style.height= t + "px";
    newC.style.top = rnd(0, window.innerHeight - t) + "px";
    newC.style.left = rnd(0, window.innerWidth - t) + "px";
    document.querySelector("#conteneur").appendChild(newC);
    setTimeout(() => {newC.remove(); newCircle(); }, rnd(1000, 3000));   
}

  for(let i=0; i<rnd(15, 50); ++i){
    newCircle();
  }
  
