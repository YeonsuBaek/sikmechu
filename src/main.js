import options from './assets/options.json'
import menu from './assets/menu.json'

const createOptionElement = (option) => {
  const element = document.createElement('div')
  element.innerHTML = `
      <div id="option">
        <h1 class="mt-4 mb-2">${option.question}</h1>
      </div>
    `
  const optionElement = element.querySelector('#option')
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

const createResultElement = (result) => {
  if (result.length > 0) {
    const element = document.createElement('div')
    element.setAttribute('id', 'result-section')
    element.innerHTML += '<h1 class="mt-4 mb-2 text-lg font-bold">이런 메뉴는 어떠세요?</h1>'
    const menuElement = createMenuElement(result)
    element.appendChild(menuElement)
    return element
  }

  const element = document.createElement('p')
  element.setAttribute('id', 'result-section')
  element.innerText = '선택된 옵션에 맞는 메뉴를 찾을 수 없습니다.'
  return element
}

const createMenuElement = (result) => {
  const element = document.createElement('ul')
  element.classList.add(['grid', 'grid-flow-row', 'grid-cols-4', 'gap-2', 'max-sm:grid-cols-1', 'max-md:grid-cols-3'])
  result.forEach((item) => {
    element.innerHTML += `
      <li>
        <button class="w-full px-2 py-1 secondary-button" type="button">${item.name}</button>
      </li>
    `
  })
  return element
}

function main() {
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
}

main()
