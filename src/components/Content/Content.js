import React from 'react'
import cx from 'classnames'
import styles from './Content.scss'

const Content = ({
  children,
  className
}) => (
  <div
    className={cx(styles.component, {
      [className]: className
    })}>
    {children}
  </div>
)

export default Content
