/** @type {Object.<string, Function>} 현재 경로의 라우트 */
let routes

window.addEventListener('popstate', () => {
  const { pathname, search } = location
  const params = Object.fromEntries(new URLSearchParams(search))
  if (routes[pathname]) {
    routes[pathname]({ searchParams: params })
  } else {
    goto('/404', false)
  }
})

/**
 * 주어진 URL로 이동하고, 이동한 후에는 해당 경로에 대응하는 함수를 실행한다.
 *
 * @param {string} url 이동할 경로
 * @param {boolean} push 브라우저 히스토리 항목 추가 여부
 */
const goto = (url, push = true) => {
  const [pathname, search] = url.split('?')
  const params = Object.fromEntries(new URLSearchParams(search))
  if (routes[pathname]) {
    if (push) {
      history.pushState({ params }, '', url)
    }
    routes[pathname]({ searchParams: params })
  } else {
    goto('/404', false)
  }
}

/**
 *  초기에 브라우저가 로드될 때 호출되며, 현재 URL에 해당하는 경로로 이동한다.
 *
 * @param {Object.<string, Function>} params 라우트와 각 라우트에 대응하는 처리 함수로 구성된 객체
 */
const start = (params) => {
  routes = params
  goto(location.pathname + location.search, false)
}

export { start, goto }
