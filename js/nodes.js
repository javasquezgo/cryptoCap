const btn = document.querySelector(".header-nav i");
const navMenu = document.querySelector(".header-menu");
const trendCards = document.querySelector(".trend-card");

btn.addEventListener("click", () => {
  navMenu.classList.toggle("none");
});
