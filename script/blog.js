//Js for Hamburger button
function myHamburger() {
  let navDrawer = document.getElementById("navDrawer");
  let body = document.body;

  navDrawer.classList.toggle("open");
  body.classList.toggle("no-scroll");

  if (navDrawer.classList.contains("open")) {
    navDrawer.style.left = "0";
  } else {
    navDrawer.style.left = "-100%";
  }
}

// Add an event listener to handle scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

//Js for the arrow button besides the Blog link
let hoverElement = document.querySelector("#status-active-hover");
let selectedElement = document.querySelector("#select-blogs");

if (hoverElement && selectedElement) {
  hoverElement.addEventListener("mouseover", function () {
    selectedElement.style.display = "block";
    if (hoverElement.innerHTML == "▼") {
      hoverElement.innerHTML = "&#9650;";
    }
  });

  hoverElement.addEventListener("mouseout", function () {
    selectedElement.style.display = "none";
    if (hoverElement.innerHTML == "▲") {
      hoverElement.innerHTML = "&#9660;";
    }
  });

  selectedElement.addEventListener("mouseover", function () {
    selectedElement.style.display = "block";
    hoverElement.innerHTML = "&#9650;";
  });

  selectedElement.addEventListener("mouseout", function () {
    selectedElement.style.display = "none";
    hoverElement.innerHTML = "&#9660;";
  });
} else {
  console.error("Error");
}

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
