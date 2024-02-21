import options from '../assets/options.json'
import menu from '../assets/menu.json'
import { goto } from '../lib/router'
import { createOptionElement } from '../components/option'
import { createResultElement } from '../components/result'

function renderIndex() {
  document.querySelector('#app').innerHTML = `
        <!-- Options -->
        <main id="main-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
        <section id="options"></section>
        <button id="submit-button" class="mt-7 primary-button" type="button">밥 먹을 준비 완료!</button>
        </main>

        <!-- Loading -->
        <aside class="fixed z-50 flex-col hidden w-48 h-48 p-5 bg-white rounded flex-center pos-center">
        <div class="relative w-10 h-10 m-auto animate-spin">
            <i class="absolute top-0 left-0 inline-block w-4 h-4 rounded-full opacity-25 bg-blue-primary"></i>
            <i class="absolute bottom-0 left-0 inline-block w-4 h-4 rounded-full opacity-50 bg-blue-primary"></i>
            <i class="absolute top-0 right-0 inline-block w-4 h-4 rounded-full opacity-75 bg-blue-primary"></i>
            <i class="absolute bottom-0 right-0 inline-block w-4 h-4 rounded-full bg-blue-primary"></i>
        </div>
        <p>메뉴 탐색 중...</p>
        </aside>
        <aside class="fixed z-40 hidden bg-black pos-full opacity-20"></aside>

        <!-- Result -->
        <main id="result-container" class="hidden pt-12 mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
        <button id="reset-button" class="mt-7 mb-2 primary-button" type="button">다시 찾아보기</button>
        <button id="add-button" class="w-full py-3 red-button" type="button">새로운 메뉴 추가하기</button>
        </main>
    `

  const mainContainer = document.querySelector('#main-container')
  const optionsElement = document.querySelector('#options')
  const resultContainer = document.querySelector('#result-container')
  let selectedOption = options.reduce((acc, option) => {
    acc[option.id] = []
    return acc
  }, {})

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })

  const selectionButton = document.querySelectorAll('.selection-button')

  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')

    const result = menu.filter((item) => {
      return Object.keys(selectedOption).every((key) => {
        return !selectedOption[key].length || selectedOption[key].some((value) => item[key].includes(value))
      })
    })

    const resultElement = createResultElement(result)
    resultContainer.prepend(resultElement)
  })

  const resetButton = document.querySelector('#reset-button')
  resetButton.addEventListener('click', () => {
    const resultSection = resultContainer.querySelector('#result-section')
    resultSection.remove()
    mainContainer.classList.remove('hidden')
    resultContainer.classList.add('hidden')
    selectedOption = options.reduce((acc, option) => {
      acc[option.id] = []
      return acc
    }, {})

    Array.from(selectionButton).forEach((button) => {
      button.classList.remove('blue-button')
      button.classList.add('secondary-button')
    })
  })

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

  const addButton = document.querySelector('#add-button')
  addButton.addEventListener('click', () => {
    goto('/add-menu')
  })
}

export { renderIndex }
