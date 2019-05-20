import React from 'react'
import PropTypes from 'prop-types'
import styles from './Divider.scss'
import cx from 'classnames'

const Divider = ({
  label
}) => (
  <div
    className={cx(styles.component, {
      [styles.hasLabel]: label
    })}>
    {label}
  </div>
)

Divider.propTypes = {
  label: PropTypes.string
}

export default Divider
