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
