const menuSite = document.querySelector(".menu");
const btnOpenMenu = document.querySelector(".header__content__burger");
const btnCloseMenu = document.querySelector(".menu__close");

btnOpenMenu.addEventListener("click", () => menuSite.style.display = "block");


btnCloseMenu.addEventListener("click", () => menuSite.style.display = "none");