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

// Adding an event listener to handle scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

//JavaScript for Complete your meal Carousel Begins Here
const carousel = document.getElementById("image-carousel");
let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 3;
  } else if (currentIndex > 3) {
    currentIndex = 0;
  }

  const translateValue = -currentIndex * 36 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

//JavaScript for Recently ordered Carousel Begins Here
const carousel1 = document.getElementById("image-carousel1");
let currentIndex1 = 0;

function orderedSlide(direction) {
  currentIndex1 += direction;

  if (currentIndex1 < 0) {
    currentIndex1 = 5;
  } else if (currentIndex1 > 5) {
    currentIndex1 = 0;
  }

  const translateValue = -currentIndex1 * 20.5 + "%";
  carousel1.style.transform = "translateX(" + translateValue + ")";
}

//Js function on user icon:
function userCheck() {
  let userCheckValue = localStorage.getItem("True");
  if (userCheckValue) {
    window.location.href = "../html/myAccount.html";
  } else {
    alert(`Access Denied: Please Login First 🚫
This Page Requires You To Be Logged In.!`);
  }
}
