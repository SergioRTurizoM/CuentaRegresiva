const counter = document.getElementById("counter");
const surprise = document.getElementById("surprise");
const cuadro = document.getElementById("cuadro");

let timer = counter.textContent;

surprise.style.display = "none";

setInterval(() => {
  //console.log(timer++);
  counter.style.color = timer <= 5 ? "black" : "violet";
  counter.textContent = timer--;
  if (timer <= 5) {
    counter.style.fontSize = "90px";
  }
  if (timer < 0) {
    surprise.style.display = "block";
    timer = 0;
  }
}, 1000);

setInterval(() => {
  if (timer <= 4) {
    timer % 2 == 0
      ? (cuadro.style.backgroundColor = "yellow")
      : (cuadro.style.backgroundColor = "blue");
  }
}, 500);

setInterval(parpadea, 300);
let color = "red";

function parpadea() {
  if (timer < 1) {
    let parp = document.getElementById("cuadro");
    color = color == "blue" ? "red" : "blue";
    parp.style.color = color;
  }
}
