import React from 'react'
import ReactModal from 'react-modal'
import styles from './Modal.scss'
import Icon from 'components/Icon/Icon'
import Close from 'icons/Close.svg'
import cx from 'classnames'

ReactModal.setAppElement('#root')

const SIZE_MEDIUM = 'medium'
const SIZE_LARGE = 'large'

const Modal = ({
  isOpen,
  onExited,
  hideModal,
  header,
  footer,
  body,
  size
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onExited}
      closeTimeoutMS={140}
      className={cx(styles.component, {
        [styles[`size--${size}`]]: size
      })}
      overlayClassName={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerText}>
              {header}
            </div>
            <button
              className={styles.closeIcon}
              onClick={hideModal}>
              <div className={styles.closeIconInner}>
                <div className={styles.closeIconInner}>
                  <Icon glyph={Close} />
                </div>
              </div>
            </button>
          </div>
          <div className={styles.body}>
            {body}
          </div>
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  )
}

Modal.SIZE_MEDIUM = SIZE_MEDIUM
Modal.SIZE_LARGE = SIZE_LARGE

export default Modal
