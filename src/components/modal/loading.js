/**
 * 로딩 모달을 보여준다.
 */
function showLoading() {
  document
  document.querySelector('#modal').innerHTML = `
      <aside id="loading-container" class="fixed z-50 flex-col w-48 h-48 p-5 bg-white rounded flex-center pos-center">
        <div class="relative w-10 h-10 m-auto animate-spin">
          <i class="absolute top-0 left-0 inline-block w-4 h-4 rounded-full opacity-25 bg-blue-primary"></i>
          <i class="absolute bottom-0 left-0 inline-block w-4 h-4 rounded-full opacity-50 bg-blue-primary"></i>
          <i class="absolute top-0 right-0 inline-block w-4 h-4 rounded-full opacity-75 bg-blue-primary"></i>
          <i class="absolute bottom-0 right-0 inline-block w-4 h-4 rounded-full bg-blue-primary"></i>
        </div>
        <p>메뉴 탐색 중...</p>
        </aside>
      <aside id="loading-backdrop" class="fixed z-40 bg-black pos-full opacity-20"></aside>
    `
}

/**
 * 로딩 모달을 숨긴다.
 */
function hideLoading() {
  const loadingElement = document.querySelector('#loading-container')
  const backdropElement = document.querySelector('#loading-backdrop')
  if (loadingElement) {
    loadingElement.remove()
    backdropElement.remove()
  }
}

export { showLoading, hideLoading }
