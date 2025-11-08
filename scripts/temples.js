// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  const isVisible = nav.style.display === "flex";
  nav.style.display = isVisible ? "none" : "flex";
  menuToggle.textContent = isVisible ? "\u2630" : "X"; // Hamburger or Close
});