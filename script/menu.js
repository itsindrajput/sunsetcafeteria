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
window.addEventListener("scroll", function() {
  let navbar = document.querySelector("nav");
  
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


//JavaScript for Offer Carousel Begins Here
const carousel = document.getElementById("image-carousel");
let currentIndex = 0;

function changeSlide(direction){
  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = 3;
  }
  else if(currentIndex >3){
    currentIndex = 0;
  }

  const translateValue = -currentIndex *33 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}