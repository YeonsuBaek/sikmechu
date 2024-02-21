import { renderIndex } from '../pages'
import { renderAddMenu } from '../pages/add-new'

const routes = {
  '/': renderIndex,
  '/add-menu': renderAddMenu,
}

export { routes }
