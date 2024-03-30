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



function registerMain() {
  let form = document.getElementById('form');
  let fnameInput = form.querySelector('input[name="fname"]');
  let lnameInput = form.querySelector('input[name="lname"]');
  let emailInput = form.querySelector('input[name="email"]');
  let passwordInput = form.querySelector('input[name="password"]');
  let cnfPasswordInput = form.querySelector('input[name="cnf-password"]');
  let errorMessage = document.getElementById("error-message");

  // Validating form data
  if (fnameInput.value === '' || fnameInput.value.length < 7) {
    alert('Please Provide A First Name With At Least 6 Characters.');
    return;
  }
  if (lnameInput.value === '' || lnameInput.value.length < 4) {
    alert('Please Provide A Last Name With At Least 3 Characters.');
    return;
  }
  if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
    alert('Please Enter A Valid Email Address.');
    return;
  }
  if (passwordInput.value === '' || passwordInput.value.length < 6) {
    alert('Please Enter A Password Consisting of More Than 5 Letters.');
    return;
  }
  if (cnfPasswordInput.value === '' || cnfPasswordInput.value.length < 6) {
    alert('Please Re-enter The Password To Confirm.');
    return;
  }

  // Check password match
  if (passwordInput.value !== cnfPasswordInput.value) {
    errorMessage.textContent = 'Passwords Do Not Match, Please Re-enter!';
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  alert(`You have been successfully Registered. 🎉
Now proceed to the Login page by clicking the Sign in button. 👇`);
  localStorage.clear();
  localStorage.setItem("FirstName", fnameInput.value);
  localStorage.setItem("LastName", lnameInput.value);
  localStorage.setItem("Email", emailInput.value);
  localStorage.setItem("Password", passwordInput.value);

  form.reset();
  console.clear();
}

function checkPasswordMatch() {
  let passwordInput = document.querySelector('input[name="password"]');
  let cnfPasswordInput = document.querySelector('input[name="cnf-password"]');
  let errorMessage = document.getElementById("error-message");

  if (passwordInput.value !== cnfPasswordInput.value) {
    errorMessage.textContent = 'Passwords do not match, please re-enter!';
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}
document.querySelector('input[name="password"]').addEventListener("input", checkPasswordMatch);
document.querySelector('input[name="cnf-password"]').addEventListener("input", checkPasswordMatch);


function isValidEmail(email) {
// Basic email validation regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}



//js for Login page begins here
function loginMain() {
  let form = document.querySelector('.form');
  let usernameInput = form.querySelector('input[name="username"]');
  let passwordInput = form.querySelector('input[name="login-password"]');

  // Validating form data
  if (usernameInput.value === '' || !isValidEmail(usernameInput.value)){
    alert('Please Enter A Valid Email Address');
    return;
  }
  if (passwordInput.value === '') {
    alert('Please Enter Your Password.');
    return;
  }
  if(passwordInput.value.length < 6){
    alert('Please Re-enter Your Password.');
    return;
  }
  const loginEmail = localStorage.getItem("Email" || '');
  const loginpassword = localStorage.getItem("Password");
  if(loginEmail === usernameInput.value || !loginEmail == ''){
    if(loginpassword === passwordInput.value){
      localStorage.setItem("True", true);
    alert(`You have been successfully Logged in. 
Redirecting to the Dashboard Page... 🚀`);
    form.reset();
    window.location.href = '../html/dashboard.html';
    }
    
    else{
      alert("Passwords do not match, please re-enter!");
    }
  }
  else{
    alert(`You're Not Registered! 🤔 
Please Signup Before Signing In. 📝`);
  }

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
