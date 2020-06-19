import React, { FC } from 'react'
import { connect, DispatchProp } from 'react-redux'

import Page from '@/components/Page'

import { Actions, RootState } from '@/store/index'

import { Category } from '@/store/models/category'

import styles from './Home.module.scss'

export type AppState = {
  categories: Category[]
}

const Home: FC<AppState & DispatchProp<Actions>> = (props) => {
  const { categories } = props
  return (
    <Page>
      <h1 className={styles.title}>categories: {categories.length}</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              {category.id}: {category.name}
            </li>
          )
        })}
      </ul>
    </Page>
  )
}

export default connect<AppState, {}, {}, RootState>(function mapStateToProps(state) {
  return { categories: state.category.items }
})(Home)
