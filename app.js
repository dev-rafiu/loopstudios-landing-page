const menuBtn = document.querySelector("[data-btn-openMenu]");
const closeMenuBtn = document.querySelector("[data-btn-closeMenu]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector(".header");
const currentYear = document.querySelector(".current-year");
currentYear.innerText = new Date().getFullYear();
console.log(currentYear);
menuBtn.addEventListener("click", () => {
  navLinks.classList.add("show-nav-links");
  header.classList.add("toggle");
});

closeMenuBtn.addEventListener("click", () => {
  navLinks.classList.remove("show-nav-links");
  header.classList.remove("toggle");
});
