const btn = document.querySelector(".header-nav i");
const navMenu = document.querySelector(".header-menu");

btn.addEventListener("click", () => {
  navMenu.classList.toggle("none");
});
