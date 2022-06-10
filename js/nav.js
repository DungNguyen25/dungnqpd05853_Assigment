const links = document.querySelector(".header-nav");
const menuBar = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  links.classList.toggle("active-header-nav");
});
