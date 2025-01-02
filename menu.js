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

//  SCROLL NED TIL TEMA3
document.querySelector(".scroll2").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#tema2").scrollIntoView({ behavior: "smooth" });
});

//  SCROLL NED TIL TEMA3
document.querySelector(".scroll3").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#tema3").scrollIntoView({ behavior: "smooth" });
});

//  SCROLL NED TIL TEMA4
document.querySelector(".scroll4").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#tema4").scrollIntoView({ behavior: "smooth" });
});

//  SCROLL NED TIL TEMA5
document.querySelector(".scroll5").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#tema5").scrollIntoView({ behavior: "smooth" });
});
