export function hideElement(element) {
  element.classList.add('visually-hidden')
  elements.blurOverlay.classList.add('visually-hidden')
}

export function showElement(element) {
  element.classList.remove('visually-hidden')
  elements.blurOverlay.classList.remove('visually-hidden')
}
