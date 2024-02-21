import options from '../assets/options.json'

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
      <input class="w-full outline-0 overflow-hidden" type='text' placeholder="예: 불고기, 새우볶음밥, 마라탕" />
      <h1 class="mt-4 mb-2">옵션 설정하기</h1>
      <section id="add-options"></section>
      <button id="submit-button" class="mt-7 primary-button" type="button">메뉴 추가하기</button>
    </main>
    `
  const addContainer = document.querySelector('#add-container')
  const optionsElement = document.querySelector('#add-options')

  options.forEach((option) => {
    const optionElement = createOptionElement(option)
    optionsElement.appendChild(optionElement)
  })
}

export { renderAddMenu }
