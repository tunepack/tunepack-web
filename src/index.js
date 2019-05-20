import { initialize as initializeGA } from 'utils/ga'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'

import pages from './pages'

import './index.scss'

initializeGA()

export const rootElement = document.getElementById('root')

function renderApp (pages) {
  render(
    <AppContainer>
      <ModalProvider container={TransitionGroup}>
        {pages}
      </ModalProvider>
    </AppContainer>,
    rootElement
  )
}

renderApp(pages)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./pages', () => renderApp(require('./pages').default))
  }
}
