const music = document.getElementById("bgMusic");
const screen = document.body;

let started = false;

screen.addEventListener("click", () => {
  if (!started) {
    music.volume = 0.8;
    music.play().catch(() => {});
    started = true;
  }
});
