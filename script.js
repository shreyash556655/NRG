const slider = document.getElementById("slider");

function slideLeft() {
  slider.scrollBy({ left: -300, behavior: "smooth" });
}

function slideRight() {
  slider.scrollBy({ left: 300, behavior: "smooth" });
}
