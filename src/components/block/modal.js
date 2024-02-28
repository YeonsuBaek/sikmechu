/**
 * Modal을 보여준다.
 *
 * @param {Object} options Modal에 대한 옵션들
 * @param {string} options.message 표시할 메시지
 * @param {{ cancel: string | null, save: string | null }} options.buttonLabel 버튼 라벨
 * @param {() => void} options.onSave 저장할 때 호출할 함수
 */
function showModal({ message, buttonLabel, onSave }) {
  document
  document.querySelector('#modal').innerHTML = `
        <aside id="modal-container" class="fixed z-50 flex-col w-[90%] max-w-[572px] bg-white rounded pos-center">
          <main class="p-6">${message}</main>
          <footer id="modal-footer" class="flex-center md:justify-end w-full h-[64px] px-4 gap-2"></footer>
        </aside>
        <aside id="modal-backdrop" class="fixed z-40 bg-black pos-full opacity-20"></aside>
      `

  const footer = document.querySelector('#modal-footer')
  const { cancel, save } = buttonLabel
  if (cancel) {
    footer.innerHTML += `
      <button type="button" id="cancel-button" class="gray-button w-full md:w-auto py-2 px-3">${cancel}</button>
    `
  }
  if (save) {
    footer.innerHTML += `
      <button type="button" id="save-button" class="blue-button w-full md:w-auto py-2 px-3">${save}</button>
    `
  }

  const cancelButton = footer.querySelector('#cancel-button')
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      hideModal()
    })
  }

  const saveButton = footer.querySelector('#save-button')
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      hideModal()
      onSave()
    })
  }
}

/**
 * 로딩 모달을 숨긴다.
 */
function hideModal() {
  const modalElement = document.querySelector('#modal-container')
  const backdropElement = document.querySelector('#modal-backdrop')
  if (modalElement) {
    modalElement.remove()
    backdropElement.remove()
  }
}

export { showModal }
