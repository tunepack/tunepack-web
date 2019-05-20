import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import styles from './FadeScale.scss'
import cx from 'classnames'

const FadeScale = ({ in: inProp, duration = 400, children }) => (
  <Transition
    in={inProp}
    timeout={duration}>
    {state => (
      <div
        className={cx(styles.component, {
          [styles[`component--${state}`]]: state
        })}>
        {children}
      </div>
    )}
  </Transition>
)

FadeScale.propTypes = {
  in: PropTypes.bool,
  duration: PropTypes.number,
  children: PropTypes.node
}

export default FadeScale
