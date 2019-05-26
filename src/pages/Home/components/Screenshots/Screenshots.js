import React from 'react'
import Search from './images/Search.png'
import Downloads from './images/Downloads.png'
import Settings from './images/Settings.png'
import styles from './Screenshots.scss'

const images = [{
  src: Search,
  alt: 'search',
  description: 'Search for high quality audio files'
}, {
  src: Downloads,
  alt: 'downloads',
  description: 'Keep track of your downloads'
}, {
  src: Settings,
  alt: 'settings',
  description: 'Fine tune searching settings'
}]

const Screenshots = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={styles.imageWrap}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image} />
              <div className={styles.imageDescription}>
                {image.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Screenshots
