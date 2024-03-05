import { goto } from '../lib/router'
import { renderOptions, toggleOptionButton } from '../components/elements/option'
import { getOptions } from '../api/options'

/**
 * 첫 페이지를 렌더링한다.
 */
async function renderIndex() {
  document.querySelector('#app').innerHTML = `
      <main id="main-container" class="mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
        <section id="options"></section>
        <button id="submit-button" class="mt-7 primary-button blue-button" type="button">밥 먹을 준비 완료!</button>
      </main>
    `

  const optionsElement = document.querySelector('#options')
  const options = await getOptions()
  renderOptions(optionsElement, options)

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
