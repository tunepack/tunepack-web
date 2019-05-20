import React from 'react'
import styles from './HomeView.scss'
import Logo from 'components/Logo/Logo'
import BackgroundWave from '../BackgroundWave/BackgroundWave'
import DownloadButton from '../DownloadButton/DownloadButton'
import { useModal } from 'react-modal-hook'
import ModalDownload from '../ModalDownload/ModalDownload'

const HomeView = () => {
  const [showModal, hideModal] = useModal(({
    in: isOpen,
    onExited
  }) => {
    return (
      <ModalDownload
        isOpen={isOpen}
        onExited={onExited}
        hideModal={hideModal} />
    )
  })

  const handleDownloadButtonClick = () => {
    showModal()
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.headerBackground}>
          <BackgroundWave />
        </div>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <h1 className={styles.name}>
            Tunepack
          </h1>
          <h2 className={styles.title}>
            <strong>Tunepack</strong> is a tool for finding and downloading high quality audio files
          </h2>
          <h3 className={styles.subtitle}>
            It can also burn cds or transfer to USB disks
            <br />
            It's the perfect tool for DJs or other music professionals
          </h3>
          <div className={styles.btnDownload}>
            <DownloadButton
              onClick={handleDownloadButtonClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView
