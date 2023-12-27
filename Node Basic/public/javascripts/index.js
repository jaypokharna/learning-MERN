const text = document.querySelector("#text");
const ball = document.querySelector("#ball");
window.addEventListener("mousemove", function (dets) {
  let positionX = (dets.clientX - window.innerWidth / 2) / 10;
  let positionY = (dets.clientY - window.innerHeight / 2) / 5;

  text.style.transform = `translate(${positionX}px,${positionY}px)`;
  ball.style.transform = `translate(${-positionX}px,${-positionY}px)`;
});

console.log("working")