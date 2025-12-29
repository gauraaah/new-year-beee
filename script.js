const music = document.getElementById("bgMusic");

let started = false;

document.body.addEventListener("click", () => {
  if (!started) {
    music.volume = 0.8;
    music.play().catch(() => {});
    started = true;
  }
});
