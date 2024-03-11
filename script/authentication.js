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
window.addEventListener("scroll", function() {
  let navbar = document.querySelector("nav");
  
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});



//js for register-main begins here
function registerMain() {
  let form = document.getElementById('form');
  let fnameInput = form.querySelector('input[name="fname"]');
  let lnameInput = form.querySelector('input[name="lname"]');
  let emailInput = form.querySelector('input[name="email"]');
  let passwordInput = form.querySelector('input[name="password"]');
  let cnfPasswordInput = form.querySelector('input[name="cnf-password"]');

  // Validating form data
  if (fnameInput.value === '') {
    alert('Please Enter Your First Name');
    return;
  }
  if (lnameInput.value === '') {
    alert('Please Enter Your Last Name');
    return;
  }

  if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
    alert('Please Enter A Valid Email Address');
    return;
  }

  if (passwordInput.value === '') {
    alert('Please Enter A Password');
    return;
  }

  if (cnfPasswordInput.value === '') {
    alert('Please Re-enter The Password To Confirm');
    return;
  }

  if (passwordInput.value !== cnfPasswordInput.value) {
    console.error();
    return;
  }


  alert(`You have been successfully registered to the sunset cafe websit 🚀`)

  form.reset();
  console.clear();
}

function isValidEmail(email) {
// Basic email validation regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}



//js for register-main begins here
function loginMain() {
  let form = document.querySelector('.form');
  let usernameInput = form.querySelector('input[name="username"]');
  let passwordInput = form.querySelector('input[name="login-password"]');

  // Validating form data
  if (usernameInput.value === '') {
    alert('Please Enter Your Username.');
    return;
  }

  if (passwordInput.value === '') {
    alert('Please Enter Your Password.');
    return;
  }

  alert(`You have been successfully logged in. Redirecting to Home Page... 🚀`);

  form.reset();
  console.clear();

  window.location.href = '../index.html';
}



// Js Code Forgot page begins here
  function generateOTP() {
    // Get the email input value
    const emailInput = document.querySelector('input[name="email"]').value;

    // Validate the email using a simple regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    alert(`Generated OTP: ${otp}`);
  }

  function reservation() {
    const emailInput = document.querySelector('input[name="email"]').value;
    if (emailInput.trim() === '') {
      alert('Please enter your email address.');
      return;
    }
    generateOTP();
  }
