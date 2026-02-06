const buttonY = document.getElementById("buttonY");
const buttonN = document.getElementById("buttonN");
const stage = document.getElementById("stage");

console.log(buttonY, buttonN); // ← 여기!
buttonY.addEventListener("click", () => {
  alert("💖 데이트가 성사되었습니다! 💖");
});

buttonN.addEventListener("mouseenter", () => {
  const stageRect = stage.getBoundingClientRect();
  const btnRect = buttonN.getBoundingClientRect();

  const maxX = stageRect.width - btnRect.width;
  const maxY = stageRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  buttonN.style.left = `${randomX}px`;
  buttonN.style.top = `${randomY}px`;
});

function scaleStage() {
  const stage = document.getElementById("stage");

  const scaleX = window.innerWidth / 1440;
  const scaleY = window.innerHeight / 1024;
  const scale = Math.min(scaleX, scaleY);

  stage.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleStage);
window.addEventListener("load", scaleStage);
