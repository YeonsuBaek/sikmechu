function loading() {
  document.querySelector('#app').innerHTML = `
      <aside class="fixed z-50 flex-col w-48 h-48 p-5 bg-white rounded flex-center pos-center">
        <div class="relative w-10 h-10 m-auto animate-spin">
          <i class="absolute top-0 left-0 inline-block w-4 h-4 rounded-full opacity-25 bg-blue-primary"></i>
          <i class="absolute bottom-0 left-0 inline-block w-4 h-4 rounded-full opacity-50 bg-blue-primary"></i>
          <i class="absolute top-0 right-0 inline-block w-4 h-4 rounded-full opacity-75 bg-blue-primary"></i>
          <i class="absolute bottom-0 right-0 inline-block w-4 h-4 rounded-full bg-blue-primary"></i>
        </div>
        <p>메뉴 탐색 중...</p>
        </aside>
      <aside class="fixed z-40 bg-black pos-full opacity-20"></aside>
    `
}

export { loading }
