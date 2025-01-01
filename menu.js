// BURGER MENU
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

//  SCROLL NED TIL FOOTEREN
document.querySelector(".kontakt").addEventListener("click", function (e) {
  e.preventDefault(); // Forhindrer standard linkadfærd
  document.querySelector("#scroll").scrollIntoView({ behavior: "smooth" });
});
