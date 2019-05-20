import React from 'react'
import styles from './PageLoader.scss'
import Spinner from 'components/Spinner/Spinner'

const PageLoader = () => (
  <div className={styles.component}>
    <div className={styles.loader}>
      <Spinner primary />
    </div>
  </div>
)

export default PageLoader
