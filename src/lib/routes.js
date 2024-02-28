import { renderIndex } from '../pages'
import { renderResult } from '../pages/result'
import { renderAddMenu } from '../pages/add-menu'

const routes = {
  '/': renderIndex,
  '/result': renderResult,
  '/add-menu': renderAddMenu,
}

export { routes }
