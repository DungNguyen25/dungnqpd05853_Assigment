function myFunction() {
  var element = document.body;
  element.classList.toggle("light");
}
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bx-sun");
const moonIcon = document.querySelector(".toggle .bxs-moon");

toggle.addEventListener("change", () => {
  sunIcon.className =
    sunIcon.className == "bx bx-sun" ? "bx bxs-sun" : "bx bx-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});
