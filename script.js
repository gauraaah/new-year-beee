const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const music = document.getElementById("bgMusic");

let started = false;

document.addEventListener("click", () => {
  if (started) return;
  started = true;

  music.muted = false;
  music.volume = 1.0;

  music.play()
    .then(() => console.log("Music playing"))
    .catch(err => console.log("Audio error:", err));

  scene1.classList.remove("active");
  scene2.classList.add("active");
});
