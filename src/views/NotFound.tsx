import React, { FC } from 'react'

import Page from '@/components/Page'

import styles from './Home.module.scss'

const NotFound: FC = () => {
  return (
    <Page>
      <h1 className={styles.title}>404</h1>
      <p>page not found!</p>
    </Page>
  )
}

export default NotFound
