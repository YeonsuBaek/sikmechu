import options from './assets/options.json'

const createOptionElement = (option) => {
  const element = document.createElement('div')
  element.innerHTML = `
      <div id="option">
        <h1 class="mt-4 mb-2">${option.question}</h1>
        <ul id="selection"></ul>
      </div>
    `
  const selectionsElement = element.querySelector('#selection')
  const selectionElement = createSelectionElement(option.selection)
  selectionsElement.appendChild(selectionElement)
  return element
}

const createSelectionElement = (selections) => {
  const element = document.createElement('ul')
  selections.forEach((selection) => {
    element.innerHTML += `
        <li class="inline-flex mb-4 mr-2">
        <button class="px-3 py-1 secondary-button" type="button">
            <span>${selection}</span>
        </button>
        </li>
      `
  })
  return element
}

function main() {
  const mainContainer = document.querySelector('#main-container')
  const optionsElement = document.querySelector('#options')
  const resultContainer = document.querySelector('#result-container')

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })

  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
  })

  const resetButton = document.querySelector('#reset-button')
  resetButton.addEventListener('click', () => {
    mainContainer.classList.remove('hidden')
    resultContainer.classList.add('hidden')
  })
}

main()
