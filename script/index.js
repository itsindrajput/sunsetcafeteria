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


// Function to show the next item in the carousel
let currentIndex = 0;
function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}
// Function to handle auto-play
function autoPlay() {
    timeoutId = setTimeout(() => {
        nextItem();
        autoPlay();
    }, 3000); 
}

// Add an event listener to handle scroll
window.addEventListener("scroll", function() {
  let navbar = document.querySelector("nav");
  
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


//script for card slider (nav-carousel-container) begins here 
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


//Script for Deals and Offers Section Begins here
document.querySelectorAll(".carousel-for-offer").forEach((carouselForOffer) => {
    const items = carouselForOffer.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });

    carouselForOffer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="carousel__nav">
          ${buttonsHtml.join("")}
        </div>
      `
    );

    const buttons = carousel.querySelectorAll(".carousel__button");
    function showItem(index) {
        items.forEach((item) => item.classList.remove("carousel__item--selected"));
        const buttons = carouselForOffer.querySelectorAll(".carousel__button");
        buttons.forEach((button) => button.classList.remove("carousel__button--selected"));
    
        items[index].classList.add("carousel__item--selected");
        buttons[index].classList.add("carousel__button--selected");
    }

    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        currentIndex = i;
        showItem(currentIndex);
      });
    });

    // Select the first item on page load
    showItem(currentIndex);

    // Auto-slide every 3 seconds (adjust the interval as needed)
    setInterval(() => {
      nextItem();
    }, 3000);
});



//Script for Motivation and Subscription Section Begins Here!
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const navBar = document.getElementById('slider-nav-bar');

let currentSlide = 0;

// Initialize navigation dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    navBar.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Set initial active state
dots[currentSlide].classList.add('active-dot');

function updateNav() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active-dot');
        if (index === currentSlide) {
            dot.classList.add('active-dot');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    updateNav();
}

function updateSlider() {
    const translateValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    updateNav();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
    updateNav();
}

// Button click events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


//reservation section begins here
function reservation() {
    let form = document.getElementById('form');
    let nameInput = form.querySelector('input[name="name"]');
    let emailInput = form.querySelector('input[name="email"]');
    let datetimeInput = form.querySelector('input[name="datetime"]');
    let numberInput = form.querySelector('input[name="number"]');
    
    // Validating form data
    if (nameInput.value === '' || nameInput.value.length < 7) {
      alert('Please Enter Your Full Name');
      return;
    }

    if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
      alert('Please Enter A Valid Email Address');
      return;
    }

    if (datetimeInput.value === '') {
      alert('Please Select A Date And Time');
      return;
    }

    if (numberInput.value === '' || isNaN(numberInput.value) || parseInt(numberInput.value) <= 0) {
      alert('Please Enter A Valid Number Of People');
      return;
    }


    alert(`Your Table Has Been Booked. 
Thank You.!
🚀 🎉 🥳`)

    form.reset();
    console.clear();
}

function isValidEmail(email) {
// Basic email validation regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}