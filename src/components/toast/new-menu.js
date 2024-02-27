/**
 * Popover를 띄운다.
 *
 * @param {string} text 알림 문구
 * @param {'success' | 'fail' | 'alert' | null} state 알림 상태
 */
function showPopover(text, state) {
  const color = getColor(state)
  document
  document.querySelector('#toast').innerHTML = `
        <aside
          id="success-container"
          class="popover popover-removing fixed top-6 right-6 z-50 flex items-center justify-between w-[312px] min-h-[64px] bg-white border rounded shadow-lg"
          style="border-color:${color};"
        >
          <p class="pl-4">${text}</p>
          <button id="close-button" type="button" class="pr-2 w-8 h-8 dark-text-button">
            <i class="ph-x"></i>
          </button>
        </aside>
      `

  const successElement = document.querySelector('#success-container')
  setTimeout(() => {
    successElement.classList.remove('popover-removing')
  })
  setTimeout(() => {
    hiddenPopover()
  }, 5000)

  const closeButton = document.querySelector('#close-button')
  closeButton.addEventListener('click', () => {
    hiddenPopover()
  })
}

/**
 * Popover를 닫는다.
 */
function hiddenPopover() {
  const successElement = document.querySelector('#success-container')
  successElement.classList.add('popover-removing')
  setTimeout(() => {
    successElement.remove()
  }, 300)
}
/**
 * 상태에 맞는 Popover 색상을 반환한다.
 *
 * @param {'success' | 'fail' | 'alert' | null} state
 * @returns {string}
 */
function getColor(state) {
  if (state === 'success') {
    return '#95de64'
  }
  if (state === 'fail') {
    return '#ff7875'
  }
  if (state === 'alert') {
    return '#ffc069'
  }
  return '#f0f0f0'
}

export { showPopover }
