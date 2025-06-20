const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll("#nav-links a");

// Toggle menu icon click
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


