import options from '../assets/options.json'
import { goto } from '../lib/router'
import { renderOptions, toggleOptionButton } from '../components/elements/option'

function renderIndex() {
  document.querySelector('#app').innerHTML = `
      <main id="main-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
        <section id="options"></section>
        <button id="submit-button" class="mt-7 primary-button" type="button">밥 먹을 준비 완료!</button>
      </main>
    `

  const optionsElement = document.querySelector('#options')
  renderOptions(optionsElement)

  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', () => {
    const query = JSON.stringify(selectedOptions)
    goto(`/result?query=${query}`)
  })

  const selectionButtons = document.querySelectorAll('.selection-button')
  const selectedOptions = options.reduce((acc, option) => {
    acc[option.id] = []
    return acc
  }, {})
  toggleOptionButton(selectionButtons, selectedOptions)
}

export { renderIndex }
