export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

const RELEASE_TAG = '1.2.1'

export const DOWNLOAD_LINKS = {
  mac: `https://github.com/tunepack/tunepack-desktop/releases/download/v${RELEASE_TAG}/Tunepack-${RELEASE_TAG}.dmg`,
  win: `https://github.com/tunepack/tunepack-desktop/releases/download/v${RELEASE_TAG}/tunepack-desktop-setup-${RELEASE_TAG}.exe`,
  linux: `https://github.com/tunepack/tunepack-desktop/releases/download/v${RELEASE_TAG}/tunepack-desktop_${RELEASE_TAG}_amd64.deb`
}
