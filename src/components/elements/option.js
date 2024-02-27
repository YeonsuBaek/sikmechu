/**
 * 옵션 선택지 요소를 반환한다.
 *
 * @param {string} id 옵션 id
 * @param {Object.<string, string>[]} selections 옵션에 해당하는 선택지 리스트
 * @returns {HTMLUListElement} 선택지 리스트가 포함된 ul element
 */
function createSelectionElement(id, selections) {
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

/**
 * 옵션 요소를 반환한다.
 *
 * @param {Object.<string, any>[]} option
 * @returns {HTMLDivElement} 옵션 요소가 포함된 div element
 */
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

/**
 * 옵션 요소를 렌더링한다.
 *
 * @param {Element} element
 * @param {Object.<string, any>[]} options
 */
function renderOptions(element, options) {
  if (options) {
    options.forEach((option) => {
      const optionElement = createOptionElement(option)
      element.appendChild(optionElement)
    })
  } else {
    const errorElement = document.createElement('p')
    errorElement.innerText = '서버에 문제가 생겼어요! 옵션을 불러올 수 없어요!'
    element.appendChild(errorElement)
  }
}

/**
 * 옵션 선택지의 선택 여부에 따라 스타일을 변경한다.
 *
 * @param {HTMLButtonElement} button 선택지 버튼
 * @param {boolean} isSelected 선택 여부
 */
function toggleButtonStyle(button, isSelected) {
  if (isSelected) {
    button.classList.remove('blue-button')
    button.classList.add('secondary-button')
  } else {
    button.classList.add('blue-button')
    button.classList.remove('secondary-button')
  }
}

/**
 * 옵션 선택지 선택을 클릭한다.
 *
 * @param {HTMLButtonElement[]} buttons 선택지 버튼 리스트
 * @param {Object.<string, string[]>} selectors 옵션 별 선택된 선택지
 */
function toggleOptionButton(buttons, selectors) {
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      const option = button.getAttribute('data-option-id')
      const selection = button.getAttribute('data-selection-id')
      const isSelected = selectors[option].includes(selection)

      toggleButtonStyle(button, isSelected)

      if (isSelected) {
        selectors[option] = selectors[option].filter((item) => item !== selection)
      } else {
        selectors[option].push(selection)
      }
    })
  })
}

export { renderOptions, toggleOptionButton }
