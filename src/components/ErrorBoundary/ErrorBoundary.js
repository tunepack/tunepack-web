import React from 'react'
import PropTypes from 'prop-types'
import styles from './ErrorBoundary.scss'
import Button from 'components/Button/Button'

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    hasError: false
  }

  static getDerivedStateFromError () {
    return {
      hasError: true
    }
  }

  componentDidCatch () {
    // TODO: maybe report to Sentry etc. ?
  }

  handleBackClick = () => {
    window.location.reload()
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return (
        <div className={styles.component}>
          <div className={styles.content}>
            <h2>
              Something went wrong, please refresh
            </h2>
            <div className={styles.footer}>
              <Button
                onClick={this.handleBackClick}
                primary>
                Refresh
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return children
  }
}
