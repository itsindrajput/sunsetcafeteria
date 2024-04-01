// Js code for my Account Page begins here.

document.addEventListener("DOMContentLoaded", function () {
  const contactInfoNameElements =
    document.querySelectorAll(".contact-info-name");
  const contactInfoEmailElement = document.querySelector(".contact-info-email");

  // Check if contactInfoEmailElement exists before accessing its properties
  if (contactInfoEmailElement) {
    for (let i = 0; i < contactInfoNameElements.length; i++) {
      contactInfoNameElements[i].textContent =
        localStorage.getItem("FirstName") +
        " " +
        localStorage.getItem("LastName");
    }

    contactInfoEmailElement.textContent = localStorage.getItem("Email");
  } else {
    console.error("Element with class 'contact-info-email' not found.");
  }
  console.clear();
});

//Js code for subscription form begins here.
document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  if (email && email.includes("@")) {
    alert("Thank you! We will reach out to you at " + email + ".");

    document.querySelector("form").reset();
  } else {
    alert("Please provide a valid email address.");
  }
});

//Js code for Account Information begins here.
function updateInfo() {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let phone = document.querySelector("#phone").value;
  let streetAddress = document.querySelector("#streetAddress").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let zip = document.querySelector("#zip").value;

  if (
    firstName !== "" &&
    lastName !== "" &&
    phone !== "" &&
    streetAddress !== "" &&
    city !== "" &&
    state !== "" &&
    zip !== ""
  ) {
    alert(`Well Done ${firstName} 👍. 
Your Account Information Has Been Updated Successively.!`);
    document.querySelector("form").reset();
    return;
  }
}
