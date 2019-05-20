import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.scss'
import cx from 'classnames'

const Icon = ({ glyph, className }) => (
  <svg
    className={cx(styles.component, {
      [className]: className
    })}>
    <use xlinkHref={glyph} />
  </svg>
)

Icon.propTypes = {
  glyph: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Icon
