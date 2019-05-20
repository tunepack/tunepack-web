import React from 'react'
import styles from './DownloadButton.scss'
import { osLabel, OSIcon } from 'utils/browser'
import cx from 'classnames'

const DownloadButton = ({
  onClick,
  isDisabled = false
}) => {
  if (!osLabel) {
    return null
  }

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type='button'
      className={cx(styles.component, {
        [styles.isDisabled]: isDisabled
      })}>
      <div className={styles.content}>
        {OSIcon && (
          <div className={styles.icon}>
            <OSIcon />
          </div>
        )}
        <div>
          Download TunePack for {osLabel}
        </div>
      </div>
    </button>
  )
}

export default DownloadButton
