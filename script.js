const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const music = document.getElementById("bgMusic");

let started = false;

document.addEventListener("click", () => {
  if (started) return;
  started = true;

  // Play music
  music.play().catch(err => console.log(err));

  // Switch scenes
  scene1.classList.remove("active");
  scene2.classList.add("active");
});
