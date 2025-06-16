import './scss/style.scss'
const elements = {
  openBurgerMenu: document.getElementById('openBurgerMenu'),
  burgerClose: document.getElementById('burgerClose'),
  burgerMenu: document.getElementById('burgerMenu'),
  blurOverlay: document.getElementById('blurOverlay')
}
elements.openBurgerMenu.addEventListener('click', () => {
  elements.burgerMenu.style.display = 'block'
  elements.blurOverlay.style.display = 'block'
})
elements.burgerClose.addEventListener('click', () => {
  elements.burgerMenu.style.display = 'none'
  elements.blurOverlay.style.display = 'none'
})
elements.blurOverlay.addEventListener('click', () => {
  elements.burgerMenu.style.display = 'none'
  elements.blurOverlay.style.display = 'none'
})
function openMenu(buttonMenu, menu, blur) {}
