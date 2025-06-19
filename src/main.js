import './scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    //Блюр
    blurOverlay: document.getElementById('blurOverlay'),
    //Бургер
    openBurgerMenu: document.getElementById('openBurgerMenu'),
    closeBurgerMenu: document.getElementById('closeBurgerMenu'),
    burgerMenu: document.getElementById('burgerMenu'),
    //Звонок
    openCallMenu1: document.getElementById('openCallMenu1'),
    openCallMenu2: document.getElementById('openCallMenu2'),
    closeCallMenu: document.getElementById('closeCallMenu'),
    callMenu: document.getElementById('callMenu'),
    //Общение
    openFeedbackMenu1: document.getElementById('openFeedbackMenu1'),
    openFeedbackMenu2: document.getElementById('openFeedbackMenu2'),
    closeFeedbackMenu: document.getElementById('closeFeedbackMenu'),
    feedbackMenu: document.getElementById('feedbackMenu'),
    //Текст
    readMoreButton: document.getElementById('readMoreButton'),
    readMoreButtonImg: document.getElementById('readMoreButtonImg'),
    readMoreButtonText: document.getElementById('readMoreButtonText'),
    readMoreMenu: document.querySelectorAll('.article__content p'),
    //Блок c кнопками 1
    buttonsMenuFirst: document.querySelectorAll('.buttons-menu--first li'),
    showAllButtonFirst: document.getElementById('showAllButtonFirst'),
    showAllButtonFirstImg: document.getElementById('showAllButtonFirstImg'),
    showAllButtonFirstText: document.getElementById('showAllButtonFirstText'),
    //Блок c кнопками 2
    buttonsMenuSecond: document.querySelectorAll('.buttons-menu--second li'),
    showAllButtonSecond: document.getElementById('showAllButtonSecond'),
    showAllButtonSecondImg: document.getElementById('showAllButtonSecondImg'),
    showAllButtonSecondText: document.getElementById('showAllButtonSecondText')
  }
  // Нажата ли кнопка "Показать все" или "Читать далее"
  let menuStates = {
    first: false,
    second: false,
    readme: false
  }

  // Определяю количество видимых кнопок и абзацев в зависимости от ширины экрана
  function counterButtonsAndP() {
    const width = window.innerWidth
    let visiblesP
    let visiblesButtonsInFirstMenu
    let visiblesButtonsInSecondMenu

    if (width >= 1080) {
      visiblesButtonsInFirstMenu = 8
      visiblesButtonsInSecondMenu = 4
      visiblesP = 3
    } else if (width >= 768) {
      visiblesButtonsInFirstMenu = 6
      visiblesButtonsInSecondMenu = 3
      visiblesP = 2
    } else {
      visiblesButtonsInFirstMenu = elements.buttonsMenuFirst.length
      visiblesButtonsInSecondMenu = elements.buttonsMenuSecond.length
      visiblesP = 1
    }

    buttonsAndPRegulator('first', elements.buttonsMenuFirst, visiblesButtonsInFirstMenu)
    buttonsAndPRegulator('second', elements.buttonsMenuSecond, visiblesButtonsInSecondMenu)
    buttonsAndPRegulator('readme', elements.readMoreMenu, visiblesP)
  }

  // Если не нажата кнопка "показать все", то показываю только нужное количество кнопок в зависимости от ширины экрана
  function buttonsAndPRegulator(menuKey, menu, visibles) {
    if (!menuStates[menuKey]) {
      menu.forEach((elements, index) => {
        if (index < visibles) {
          elements.classList.remove('visually-hidden')
        } else {
          elements.classList.add('visually-hidden')
        }
      })
    }
  }

  // Обработчик для клика по кнопке "Показать/Скрыть"
  // 1) Смотрю какой тип кнопки изменяем
  // 2) Переключаю состояние расширения списка/абзацев
  // 3) Показываю все кнопки, переворачиваю картинку на кнопке, изменяю текст
  // 4) При повторном нажатии возвращаюсь к исходному состоянию — показываю только нужное количество кнопок в зависимости от ширины экрана, меняю стили назад
  function showHide(menuKey, menu, img, text, flag) {
    if (flag === 'btns') {
      menuStates[menuKey] = !menuStates[menuKey]
      if (menuStates[menuKey]) {
        menu.forEach((li) => li.classList.remove('visually-hidden'))
        img.classList.add('rotated')
        text.innerHTML = `Скрыть`
      } else {
        counterButtonsAndP()
        img.classList.remove('rotated')
        text.innerHTML = `Показать все`
      }
    } else if (flag === 'read') {
      menuStates[menuKey] = !menuStates[menuKey]
      if (menuStates[menuKey]) {
        menu.forEach((p) => p.classList.remove('visually-hidden'))
        img.classList.add('rotated')
        text.innerHTML = `Скрыть`
      } else {
        counterButtonsAndP()
        img.classList.remove('rotated')
        text.innerHTML = `Читать далее`
      }
    }
  }

  //Обновляю видимость кнопок и абзацев при изменении размера окна браузера
  window.addEventListener('resize', () => {
    counterButtonsAndP()
  })

  //Изначально вызываю функции для установки правильного количества видимых кнопок и абзацев, основываясь на текущей ширине окна.
  counterButtonsAndP()
  // Функция "Скрыть элемент"
  const hideElement = (element) => {
    element.classList.add('visually-hidden')
    elements.blurOverlay.classList.add('visually-hidden')
  }
  //Функция "Показать элемент"
  const showElement = (element) => {
    element.classList.remove('visually-hidden')
    elements.blurOverlay.classList.remove('visually-hidden')
  }
  // Реакция на клики мышкой
  document.addEventListener('click', (event) => {
    console.log('Клик по:', event.target)
    if (event.target === elements.openBurgerMenu) {
      event.preventDefault()
      showElement(elements.burgerMenu)
    } else if (event.target === elements.closeBurgerMenu) {
      event.preventDefault()
      hideElement(elements.burgerMenu)
    } else if (event.target === elements.openCallMenu2) {
      showElement(elements.callMenu)
    } else if (event.target === elements.closeCallMenu) {
      hideElement(elements.callMenu)
    } else if (event.target === elements.openFeedbackMenu2) {
      showElement(elements.feedbackMenu)
    } else if (event.target === elements.closeFeedbackMenu) {
      hideElement(elements.feedbackMenu)
    } else if (event.target === elements.openCallMenu1) {
      hideElement(elements.burgerMenu)
      showElement(elements.callMenu)
    } else if (event.target === elements.openFeedbackMenu1) {
      hideElement(elements.burgerMenu)
      showElement(elements.feedbackMenu)
    } else if (event.target.closest('#showAllButtonFirst')) {
      showHide(
        'first',
        elements.buttonsMenuFirst,
        elements.showAllButtonFirstImg,
        elements.showAllButtonFirstText,
        'btns'
      )
    } else if (event.target.closest('#showAllButtonSecond')) {
      event.preventDefault()
      showHide(
        'second',
        elements.buttonsMenuSecond,
        elements.showAllButtonSecondImg,
        elements.showAllButtonSecondText,
        'btns'
      )
    } else if (event.target.closest('#readMoreButton')) {
      event.preventDefault()
      showHide('readme', elements.readMoreMenu, elements.readMoreButtonImg, elements.readMoreButtonText, 'read')
    }
  })
})
