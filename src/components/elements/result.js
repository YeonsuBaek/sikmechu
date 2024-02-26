import { createMenuElement } from './menu'

/**
 *
 * @param {Object.<string, (string | string[])>[]} result 선택 결과에 대한 메뉴 리스트
 * @returns {Element}
 */
function createResultElement(result) {
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

export { createResultElement }
