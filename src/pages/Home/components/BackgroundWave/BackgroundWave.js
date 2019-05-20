import React, { useRef, useEffect } from 'react'
import styles from './BackgroundWave.scss'
import Wave from 'utils/wave'

const BackgroundWave = () => {
  const ref = useRef(null)

  useEffect(() => {
    new Wave({
      container: ref.current,
      autostart: true,
      speed: 0.05,
      amplitude: 0.7,
      color: '#000',
      height: 300
    })
  }, [])

  return (
    <div
      ref={ref}
      className={styles.component} />
  )
}

export default BackgroundWave
