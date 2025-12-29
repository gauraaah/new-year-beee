let currentScene = 1;

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  if (currentScene === 1) {
    // start music (required user interaction)
    music.play().catch(() => {});

    scene1.classList.remove("active");
    scene2.classList.add("active");

    currentScene = 2;
  }
});
