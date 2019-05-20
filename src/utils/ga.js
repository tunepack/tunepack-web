import ReactGA from 'react-ga'
import { GA_TRACKING_ID } from 'config'

export const initialize = () => {
  ReactGA.initialize(GA_TRACKING_ID, {
    gaOptions: {
      cookieDomain: 'none'
    }
  })
}

export const trackPage = (page, options) => {
  ReactGA.set({
    page,
    ...options
  })

  ReactGA.pageview(page)
}

export const event = (category, action) => {
  ReactGA.event({
    category,
    action
  })
}
