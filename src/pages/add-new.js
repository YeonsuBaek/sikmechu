import options from '../assets/options.json'
import { goto } from '../lib/router'

const createOptionElement = (option) => {
  const element = document.createElement('div')
  element.innerHTML = `
          <div id="add-option">
            <h2 class="mt-4 mb-2 font-bold">${option.question}</h2>
          </div>
        `
  const optionElement = element.querySelector('#add-option')
  const selectionElement = createSelectionElement(option.id, option.selection)
  optionElement.appendChild(selectionElement)
  return element
}

const createSelectionElement = (id, selections) => {
  const element = document.createElement('ul')
  selections.forEach((selection) => {
    element.innerHTML += `
            <li class="inline-flex mb-4 mr-2">
              <button data-option-id="${id}" data-selection-id="${selection.id}" class="selection-button px-3 py-1 secondary-button" type="button">
                <span>${selection.name}</span>
              </button>
            </li>
          `
  })
  return element
}

function renderAddMenu() {
  document.querySelector('#app').innerHTML = `
    <main id="add-container" class="w-[calc(100% - 32px)] mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
      <h1 class="mt-4 mb-2">메뉴 이름</h1>
      <input id="menu-name" class="w-full outline-0 overflow-hidden" type='text' placeholder="예: 불고기, 새우볶음밥, 마라탕" />
      <h1 class="mt-4 mb-2">옵션 설정하기</h1>
      <section id="add-options"></section>
      <button id="save-button" class="mt-7 mb-2 primary-button" type="button">메뉴 추가하기</button>
      <button id="home-button" class="w-full py-3 secondary-button" type="button">홈으로 돌아가기</button>
    </main>
    `
  const addContainer = document.querySelector('#add-container')
  const optionsElement = document.querySelector('#add-options')
  const homeButton = document.querySelector('#home-button')
  const saveButton = document.querySelector('#save-button')

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })

  const selectionButton = document.querySelectorAll('.selection-button')
  let selectedOption = options.reduce((acc, option) => {
    acc[option.id] = []
    return acc
  }, {})

  Array.from(selectionButton).forEach((button) => {
    button.addEventListener('click', () => {
      const option = button.getAttribute('data-option-id')
      const selection = button.getAttribute('data-selection-id')

      if (selectedOption[option].includes(selection)) {
        selectedOption[option] = selectedOption[option].filter((item) => item !== selection)
        button.classList.remove('blue-button')
        button.classList.add('secondary-button')
      } else {
        selectedOption[option].push(selection)
        button.classList.remove('secondary-button')
        button.classList.add('blue-button')
      }
    })
  })

  homeButton.addEventListener('click', () => {
    goto('/')
  })

  saveButton.addEventListener('click', () => {
    const menuName = document.querySelector('#menu-name').value
    const newMenu = {
      id: Math.round(Math.random() * 1000000),
      name: menuName,
      ...selectedOption,
    }
    console.log(newMenu)
    goto('/')
  })
}

export { renderAddMenu }
