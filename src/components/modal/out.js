import { goto } from '../../lib/router'

/**
 * 로딩 모달을 보여준다.
 */
function showOut() {
  document
  document.querySelector('#modal').innerHTML = `
        <aside id="cancel-container" class="fixed z-50 flex-col w-[90%] max-w-[572px] bg-white rounded pos-center">
          <main class="p-6">
            지금 나가면 작성한 내용이 모두 사라져요! 그만 작성하고 나갈까요?
          </main>
          <footer class="flex-center md:justify-end w-full h-[64px] px-4 gap-2">
            <button type="button" id="cancel-button" class="gray-button w-full md:w-auto py-2 px-3">이어서 할래요.</button>
            <button type="button" id="out-button" class="blue-button w-full md:w-auto py-2 px-3">네, 그만 할래요.</button>
          </footer>
        </aside>
        <aside id="cancel-backdrop" class="fixed z-40 bg-black pos-full opacity-20"></aside>
      `

  const cancelButton = document.querySelector('#cancel-button')
  const outButton = document.querySelector('#out-button')

  cancelButton.addEventListener('click', () => {
    hideOut()
  })

  outButton.addEventListener('click', () => {
    hideOut()
    goto('/')
  })
}

/**
 * 로딩 모달을 숨긴다.
 */
function hideOut() {
  const cancelElement = document.querySelector('#cancel-container')
  const backdropElement = document.querySelector('#cancel-backdrop')
  if (cancelElement) {
    cancelElement.remove()
    backdropElement.remove()
  }
}

export { showOut }
