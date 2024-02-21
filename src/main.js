import { renderIndex } from './pages'

let routes
window.addEventListener('popstate', (event) => {
  if (routes[location.pathname]) {
    routes[location.pathname]()
    return
  }
})

const goto = (url, { push } = {}) => {
  const pathname = url

  if (push) {
    history.pushState({}, '', url)
  }
  routes[pathname]()
  return
}

const start = (params) => {
  routes = params
  goto(location.pathname + location.search)
}

function main() {
  start({
    '/': renderIndex,
  })
}

main()
