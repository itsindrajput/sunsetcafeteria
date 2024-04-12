let hoverElement = document.querySelector("#status-active");
let selectedElement = document.querySelector("#select-blogs");
hoverElement.addEventListener("mouseover", function () {
  selectedElement.style.display = "block";
});
hoverElement.addEventListener("mouseout", function () {
  selectedElement.style.display = "none";
});
selectedElement.addEventListener("mouseout", function () {
  selectedElement.style.display = "none";
});

// JS For Latest Blog Post Begins Here
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentSlide = 0;

function updateSlider() {
  const translateValue = -currentSlide * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

// Button click events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

//JavaScript for Recently ordered Carousel Begins Here
const carousel1 = document.getElementById("video-carousel");
let currentIndex1 = 0;

function orderedSlide(direction) {
  currentIndex1 += direction;

  if (currentIndex1 < 0) {
    currentIndex1 = 4;
  } else if (currentIndex1 > 4) {
    currentIndex1 = 0;
  }

  const translateValue = -currentIndex1 * 25.4 + "%";
  carousel1.style.transform = "translateX(" + translateValue + ")";
}
