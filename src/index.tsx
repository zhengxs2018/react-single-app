import './styles/reset.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { fetchLoginUser } from './store/actions/user'
import { fetchAllCategories } from './store/actions/category'

import { setupMock } from '@/mocks/setup'

import App from './App'

async function main() {
  try {
    await Promise.all([fetchLoginUser(), fetchAllCategories()])
  } catch {
    // eslint-disable-next-line
    console.error('[core]: 数据加载失败')
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

if (process.env.NODE_ENV === 'development') {
  setupMock()
}

main()
