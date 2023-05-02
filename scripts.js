document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
});

window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

var contactForm = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.createElement("p");
  status.id = "contact-form-status";
  contactForm.appendChild(status);
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      showSuccessPopup();
      contactForm.reset();
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}

function showSuccessPopup() {
  const successPopup = document.getElementById("message-popup");
  successPopup.style.display = "block";

  setTimeout(function () {
    successPopup.style.display = "none";
  }, 5000);
}

contactForm.addEventListener("submit", handleSubmit);
