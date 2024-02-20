import options from './assets/options.json'
import menu from './assets/menu.json'

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

const createResultElement = () => {
  if (menu.length > 0) {
    const element = document.createElement('div')
    element.innerHTML += '<h1 class="mt-4 mb-2 text-lg font-bold">이런 메뉴는 어떠세요?</h1>'
    const menuElement = createMenuElement()
    element.appendChild(menuElement)
    return element
  }

  const element = document.createElement('p')
  element.innerText = '선택된 옵션에 맞는 메뉴를 찾을 수 없습니다.'
  return element
}

const createMenuElement = () => {
  const element = document.createElement('ul')
  element.classList.add(['grid', 'grid-flow-row', 'grid-cols-4', 'gap-2', 'max-sm:grid-cols-1', 'max-md:grid-cols-3'])
  menu.forEach((item) => {
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

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })

  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', () => {
    mainContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')

    const resultElement = createResultElement()
    resultContainer.prepend(resultElement)
  })

  const resetButton = document.querySelector('#reset-button')
  resetButton.addEventListener('click', () => {
    mainContainer.classList.remove('hidden')
    resultContainer.classList.add('hidden')
  })
}

main()
