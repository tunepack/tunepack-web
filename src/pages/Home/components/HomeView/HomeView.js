import React from 'react'
import styles from './HomeView.scss'
import Logo from 'components/Logo/Logo'
import BackgroundWave from '../BackgroundWave/BackgroundWave'
import DownloadButton from '../DownloadButton/DownloadButton'
import { useModal } from 'react-modal-hook'
import ModalDownload from '../ModalDownload/ModalDownload'
import Screenshots from '../Screenshots/Screenshots'
import Button from '../../../../components/Button/Button'

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
        <div className={styles.github}>
          <a
            target='_blank'
            href='https://github.com/tunepack/tunepack-desktop'>
            <Button variant='minimal'>
              View on Github
            </Button>
          </a>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <h1 className={styles.name}>
            Tunepack
          </h1>
          <h2 className={styles.title}>
            <strong>Tunepack</strong> is a <strong>free</strong> and <strong>open source</strong> desktop app for finding and downloading high quality audio files
          </h2>
          <h3 className={styles.subtitle}>
            It can also burn cds or transfer to USB disks (soon)
            <br />
            It's the perfect tool for DJs or other music professionals
          </h3>
          <div className={styles.btnDownload}>
            <DownloadButton
              onClick={handleDownloadButtonClick} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Screenshots />
      </div>
    </div>
  )
}

export default HomeView
