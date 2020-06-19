import React, { FC } from 'react'

import styles from './Page.module.scss'

const Page: FC = (props) => {
  return <div className={styles.page}>{props.children}</div>
}

export default Page
