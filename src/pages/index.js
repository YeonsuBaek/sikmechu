import options from '../assets/options.json'
import { goto } from '../lib/router'
import { createOptionElement } from '../components/option'

function renderIndex() {
  document.querySelector('#app').innerHTML = `
      <main id="main-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
        <section id="options"></section>
        <button id="submit-button" class="mt-7 primary-button" type="button">밥 먹을 준비 완료!</button>
      </main>
    `

  const optionsElement = document.querySelector('#options')
  let selectedOption = options.reduce((acc, option) => {
    acc[option.id] = []
    return acc
  }, {})

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })

  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', () => {
    goto(`/result?query=${JSON.stringify(selectedOption)}`)
  })

  const selectionButton = document.querySelectorAll('.selection-button')
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
}

export { renderIndex }
