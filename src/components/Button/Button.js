import React from 'react'
import styles from './Button.scss'
import cx from 'classnames'

const Button = ({
  children,
  type,
  variant,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cx(styles.component, {
        [styles[variant]]: variant
      })}
      {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

export default Button
