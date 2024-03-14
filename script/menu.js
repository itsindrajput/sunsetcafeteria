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



//JavaScript for Updating the count when the item is added or removed
// Function to increment count
function increment(event) {
  let countElement = event.target.parentElement.querySelector(".value");
  let count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
}

// Function to decrement count
function decrement(event) {
  let countElement = event.target.parentElement.querySelector(".value");
  let count = parseInt(countElement.innerText);
  if (count > 1) {
    countElement.innerText = count - 1;
  }
}

// Function to handle adding item to cart
function addItem(event) {
  let menuItem = event.target.closest(".menu-item");
  let itemNameElement = menuItem.querySelector("ul li.menu-txt");
  let itemName = Array.from(itemNameElement.childNodes)
                    .filter(node => node.nodeType === Node.TEXT_NODE)
                    .map(node => node.textContent.trim())
                    .join(' ');
  let itemPrice = menuItem.querySelector(".menu-txt span").innerText;
  let quantity = parseInt(menuItem.querySelector(".value").innerText);
  
  // Calculate total price
  let totalPrice = parseInt(itemPrice) * quantity;
  
  // Add item to cart
  alert('Added To Cart: ' + itemName + '\n' +
  'Price: ' + itemPrice + '\n' +
  'Quantity: ' + quantity + '\n' +
  'Total Price: ₹' + totalPrice);
}


// Attached event listeners to buttons for all menu items
let countButtons = document.querySelectorAll(".count-btn button");
countButtons.forEach(function(button) {
  if (button.textContent === '-') {
    button.addEventListener("click", decrement);
  } else {
    button.addEventListener("click", increment);
  }
});

let addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", addItem);
});




//Js For The Increase and Decrease button on mobile screen
function decrease(){
  let countElement = event.target.parentElement.querySelector("#current-Data");
  let count = parseInt(countElement.innerText);
  if (count > 1) {
    countElement.innerText = count - 1;
  }
}
function increase(){
  let countElement = event.target.parentElement.querySelector("#current-Data");
  let count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
}
let cardButtons = document.querySelectorAll(".card-btn button");
cardButtons.forEach(function(button) {
  if (button.textContent === '-') {
    button.addEventListener("click", decrease);
  } 
  else if (button.textContent === '+') {
    button.addEventListener("click", increase);
  }
});