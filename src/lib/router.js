/**
 * 라우트 경로와 해당 경로에 대응하는 함수로 구성된 객체.
 * @typedef {Object.<string, Function>} Routes
 */

/** @type {Routes} 현재 경로의 라우트 */
let routes

window.addEventListener('popstate', () => {
  if (routes[location.pathname]) {
    routes[location.pathname]()
    return
  }
})

/**
 * 주어진 URL로 이동하고, 이동한 후에는 해당 경로에 대응하는 함수를 실행한다.
 *
 * @param {string} url 이동할 경로
 * @param {boolean} push 브라우저 히스토리 항목 추가 여부
 * @returns 경로 이동한 후 해당 경로에 대응하는 함수 실행
 */
const goto = (url, push = false) => {
  const [pathname, search] = url.split('?')
  const params = Object.fromEntries(new URLSearchParams(search))
  if (routes[pathname]) {
    if (push) {
      history.pushState({}, '', url)
    }
    routes[pathname]({ searchParams: params })
    return
  } else {
    goto('/404')
  }
}

/**
 *  초기에 브라우저가 로드될 때 호출되며, 현재 URL에 해당하는 경로로 이동한다.
 *
 * @param {Record<string, Function>} params params 라우트와 각 라우트에 대응하는 처리 함수로 구성된 객체
 */
const start = (params) => {
  routes = params
  goto(location.pathname + location.search)
}

export { start, goto }
