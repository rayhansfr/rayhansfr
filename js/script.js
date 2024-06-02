function loadNavbar() {
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbarContainer").innerHTML = data;
    })
    .catch((error) => console.error("Error fetching navbar:", error));
}
function setActiveNavItem() {
  const path = window.location.pathname;

  const navLinks = document.querySelectorAll("#navbarContainer a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}

function toggleSection(sectionId, buttonId) {
  const section = document.getElementById(sectionId);
  const button = document.getElementById(buttonId);
  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    button.textContent = "-";
  } else {
    section.classList.add("hidden");
    button.textContent = "+";
  }
}

loadNavbar();

document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the close button
  var span = document.querySelector(".close");

  // When the user clicks the button, open the modal
  function showModal() {
    modal.style.display = "block";
  }

  // When the user clicks on the close button, close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
