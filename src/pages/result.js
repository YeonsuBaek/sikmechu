import { getMenu } from '../api/menu'
import { createResultElement } from '../components/elements/result'
import { goto } from '../lib/router'

/**
 * 결과 화면을 렌더링한다.
 *
 * @param {Object} searchParams
 * @param {string} searchParams.query
 */
async function renderResult({ searchParams }) {
  document.querySelector('#app').innerHTML = `
    <main id="result-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
      <button id="reset-button" class="mt-7 mb-2 primary-button blue-button" type="button">다시 찾아보기</button>
      <button id="add-button" class="primary-button red-button" type="button">새로운 메뉴 추가하기</button>
    </main>
  `

  const resultContainer = document.querySelector('#result-container')
  const selectedOption = JSON.parse(searchParams.query)
  const menu = await getMenu()
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
      button.classList.add('gray-button')
    })
  })

  const addButton = document.querySelector('#add-button')
  addButton.addEventListener('click', () => {
    goto('/add-menu')
  })
}

export { renderResult }
