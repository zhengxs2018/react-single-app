import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import store from '@/store/index'
import { routes } from '@/router'

const RouterView: FC = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
}

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  )
}

export default App
