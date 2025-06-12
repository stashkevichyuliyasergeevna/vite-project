import "./scss/style.scss";
const elements = {
  burgerButton: document.querySelector(".round-button--burger-button"),
  burgerClose: document.getElementById("burgerClose"),
  burgerMenu: document.querySelector(".burger-menu"),
  blurOverlay: document.querySelector(".blur-overlay"),
  
};
elements.burgerButton.addEventListener("click", () => {
    elements.burgerMenu.style.display = "block";
    elements.blurOverlay.style.display = "block";
});
elements.burgerClose.addEventListener("click", () => {
    elements.burgerMenu.style.display = "none";
    elements.blurOverlay.style.display = "none";
});