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

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(event.target);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200 && xhr.responseText === "success") {
        showMessagePopup();
      } else {
        alert("An error occurred while sending the email. Please try again.");
      }
    }
  };

  xhr.open("POST", "send_email.php", true);
  xhr.send(formData);
});

function showMessagePopup() {
  const popup = document.getElementById("message-popup");
  popup.style.display = "block";

  setTimeout(function () {
    popup.style.display = "none";
  }, 5000);
}
