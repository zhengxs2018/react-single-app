import { matchRoutes, RouteConfig } from 'react-router-config'

import Home from './views/Home'
import NotFound from './views/NotFound'

export const routes: RouteConfig[] = [
  { path: '/', exact: true, component: Home },
  { path: '*', component: NotFound },
]

export function match(pathname: string) {
  return matchRoutes(routes, pathname)
}
