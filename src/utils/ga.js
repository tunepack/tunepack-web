import ReactGA from 'react-ga'
import { GA_TRACKING_ID } from 'config'

const isEnabled = GA_TRACKING_ID !== 'null'

export const initialize = () => {
  if (!isEnabled) {
    return
  }

  ReactGA.initialize(GA_TRACKING_ID, {
    gaOptions: {
      cookieDomain: 'none'
    }
  })
}

export const trackPage = (page, options) => {
  if (!isEnabled) {
    return
  }

  ReactGA.set({
    page,
    ...options
  })

  ReactGA.pageview(page)
}

export const event = (category, action) => {
  if (!isEnabled) {
    return
  }

  ReactGA.event({
    category,
    action
  })
}
