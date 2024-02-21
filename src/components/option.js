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

function createOptionElement(option) {
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

export { createOptionElement }
