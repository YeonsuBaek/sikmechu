let routes

window.addEventListener('popstate', () => {
  if (routes[location.pathname]) {
    routes[location.pathname]()
    return
  }
})

const goto = (url, { push } = {}) => {
  const [pathname, search] = url.split('?')
  const params = Object.fromEntries(new URLSearchParams(search))
  if (routes[pathname]) {
    if (push) {
      history.pushState({}, '', url)
    }
    routes[pathname]({ searchParams: params })
    return
  } else {
    location.href = url
  }
}

const start = (params) => {
  routes = params
  goto(location.pathname + location.search)
}

export { start, goto }
