import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import Checkbox from 'components/Checkbox/Checkbox'
import styles from './ModalDownload.scss'
import { DOWNLOAD_LINKS } from 'config'
import { os } from 'utils/browser'
import * as ga from 'utils/ga'
import DownloadButton from '../DownloadButton/DownloadButton'

const getOSGAEvent = os => {
  if (os === 'win') {
    return 'btnDownloadWinClick'
  } else if (os === 'mac') {
    return 'btnDownloadMacClick'
  } else if (os === 'linux') {
    return 'btnDownloadLinuxClick'
  }

  return 'btnDownloadOtherClick'
}

const downloadLink = DOWNLOAD_LINKS[os]

const ModalDownload = ({
  hideModal,
  ...props
}) => {
  const [hasAgreed, setHasAgreed] = useState(false)

  const handleClick = () => {
    ga.event('Home', getOSGAEvent(os))
  }

  const handleLinkClick = (event) => {
    if (!hasAgreed) {
      return event.preventDefault()
    }
  }

  return (
    <Modal
      {...props}
      hideModal={hideModal}
      body={(
        <div className={styles.body}>
          <h1>
            Warning
          </h1>
          <p className={styles.warning}>
            Please note that Tunepack is just a more user friendly wrapper around Soulseek, which uses a P2P network to share and distribute files. Support artists by buying songs and going to their gigs.
            <br /><br />
            <a
              target='_blank'
              href='http://www.slsknet.org'>
              Learn more about Soulseek here
            </a>
            <br /><br />
            Tunepack does not endorse nor condone the sharing of copyrighted materials. You should only share and download files which you are legally allowed to or have otherwise received permission to share.
          </p>
          <div className={styles.agree}>
            <Checkbox
              label='I will follow the rules and I have read and understand the statement above.'
              form={{
                setFieldValue: (fieldName, hasAgreed) => {
                  setHasAgreed(hasAgreed)
                }
              }}
              field={{
                name: 'hasAgreed',
                value: hasAgreed
              }} />
          </div>
          <div className={styles.btnDownload}>
            <a
              onClick={handleLinkClick}
              href={hasAgreed ? downloadLink : ''}>
              <DownloadButton
                onClick={handleClick}
                isDisabled={!hasAgreed} />
            </a>
          </div>
        </div>
      )} />
  )
}

export default ModalDownload
