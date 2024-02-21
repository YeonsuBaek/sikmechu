import menu from '../assets/menu'
import { createResultElement } from '../components/result'
import { goto } from '../lib/router'

function renderResult({ searchParams }) {
  document.querySelector('#app').innerHTML = `
    <main id="result-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
      <button id="reset-button" class="mt-7 mb-2 primary-button" type="button">다시 찾아보기</button>
      <button id="add-button" class="w-full py-3 red-button" type="button">새로운 메뉴 추가하기</button>
    </main>
  `

  const resultContainer = document.querySelector('#result-container')
  const selectedOption = JSON.parse(searchParams.query)
  const result = menu.filter((item) => {
    return Object.keys(selectedOption).every((key) => {
      return !selectedOption[key].length || selectedOption[key].some((value) => item[key].includes(value))
    })
  })
  const resultElement = createResultElement(result)
  resultContainer.prepend(resultElement)

  const resetButton = document.querySelector('#reset-button')
  resetButton.addEventListener('click', () => {
    goto('/')

    const selectionButton = document.querySelectorAll('.selection-button')
    Array.from(selectionButton).forEach((button) => {
      button.classList.remove('blue-button')
      button.classList.add('secondary-button')
    })
  })

  const addButton = document.querySelector('#add-button')
  addButton.addEventListener('click', () => {
    goto('/add-menu')
  })
}

export { renderResult }
