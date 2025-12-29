let currentScene = 1;

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  if (currentScene === 1) {
    scene1.classList.remove("active");
    scene2.classList.add("active");

    music.play().catch(() => {});
    currentScene = 2;
  }
});
